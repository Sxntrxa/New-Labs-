
        const outputDiv = document.getElementById('output');


        function print(msg, type="output") {
            let htmlStr = '';
            let safeMsg = String(msg).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\n/g, "<br>");
            if (type === "output") {
                htmlStr = `<div class="flex justify-start">
                            <div class="relative max-w-[85%] px-3 py-2 bg-[#e6ffed] dark:bg-[rgba(134,239,172,0.15)] text-green-900 dark:text-green-300 border border-green-300 dark:border-green-800 rounded-lg rounded-tl-none shadow-sm">
                                <div class="absolute -left-2 top-0 w-0 h-0 border-t-[8px] border-t-green-300 dark:border-t-green-800 border-l-[8px] border-l-transparent"></div>
                                <div class="absolute -left-[6px] top-[1px] w-0 h-0 border-t-[7px] border-t-[#e6ffed] dark:border-t-[#0d0d14] border-l-[7px] border-l-transparent"></div>
                                ${safeMsg}
                            </div>
                        </div>`;
            } else if (type === "input") {
                htmlStr = `<div class="flex justify-end">
                            <div class="relative max-w-[85%] px-3 py-2 bg-[#e6f2ff] dark:bg-[rgba(125,211,252,0.15)] text-blue-900 dark:text-blue-300 border border-blue-300 dark:border-blue-800 rounded-lg rounded-tr-none shadow-sm text-right">
                                <div class="absolute -right-2 top-0 w-0 h-0 border-t-[8px] border-t-blue-300 dark:border-t-blue-800 border-r-[8px] border-r-transparent"></div>
                                <div class="absolute -right-[6px] top-[1px] w-0 h-0 border-t-[7px] border-t-[#e6f2ff] dark:border-t-[#0d0d14] border-r-[7px] border-r-transparent"></div>
                                ${safeMsg}
                            </div>
                        </div>`;
            } else if (type === "error") {
                htmlStr = `<div class="text-center text-xs text-red-500 bg-red-50 dark:bg-red-900/20 py-1 px-2 rounded mx-auto my-1 border border-red-200 dark:border-red-800/50">${safeMsg}</div>`;
            } else {
                htmlStr = `<div class="text-center text-xs text-slate-400 dark:text-slate-500 my-1">${safeMsg}</div>`;
            }
            outputDiv.innerHTML += htmlStr;
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }

        function requestInput(promptMsg) {
            return new Promise((resolve) => {
                const bar = document.getElementById('input-bar');
                const inputEl = document.getElementById('console-input');
                const btn = document.getElementById('console-submit');
                
                bar.classList.remove('opacity-50', 'pointer-events-none');
                inputEl.disabled = false;
                inputEl.value = "";
                inputEl.focus();
                
                function submit() {
                    let val = inputEl.value;
                    bar.classList.add('opacity-50', 'pointer-events-none');
                    inputEl.disabled = true;
                    inputEl.removeEventListener('keydown', keyHandler);
                    btn.removeEventListener('click', submit);
                    print(val, "input");
                    resolve(val);
                }
                
                function keyHandler(e) {
                    if (e.key === 'Enter') submit();
                }
                
                inputEl.addEventListener('keydown', keyHandler);
                btn.addEventListener('click', submit);
            });
        }

        function castValue(val, type) {
            if (type === 'Integer') return Math.floor(Number(val)) || 0;
            if (type === 'Real') return Number(val) || 0.0;
            if (type === 'String') return String(val);
            return val;
        }

        function evaluateExpression(expr, memory, isCondition = false) {
            let keys = Object.keys(memory).filter(k => k !== '__for');
            
            // แยก string literals ออกจากการประมวลผล operator เพื่อไม่ให้กระทบข้อความใน ""
            let parts = expr.split(/(["'].*?["'])/);
            for (let i = 0; i < parts.length; i++) {
                if (i % 2 === 0) {
                    // ส่วนที่เป็นโค้ด (ไม่ใช่ข้อความ)
                    parts[i] = parts[i].replace(/&/g, '+'); 
                    
                    if (isCondition) {
                        parts[i] = parts[i].replace(/\b[oO][rR]\b/g, '||')
                                       .replace(/\b[aA][nN][dD]\b/g, '&&')
                                       .replace(/(?<![<>!=])=(?!=)/g, '===') 
                                       .replace(/<>/g, '!==')
                                       .replace(/\b[nN][oO][tT]\b/g, '!');
                    }
                    
                    // Case-insensitive variables (แปลงให้ตรงกับชื่อใน memory)
                    for (let k of keys) {
                        let regex = new RegExp(`\\b${k}\\b`, 'gi');
                        parts[i] = parts[i].replace(regex, k);
                    }
                }
            }
            let parsed = parts.join('');

            let values = keys.map(k => memory[k].value); 

            try {
                let fn = new Function(...keys, `return ${parsed};`);
                return fn(...values);
            } catch (e) {
                throw new Error(`ประมวลผลสมการผิดพลาด: '${expr}'`);
            }
        }

        function buildJumps(codeLines) {
            let jumps = {};
            let stack = [];
            
            for (let i = 0; i < codeLines.length; i++) {
                let line = codeLines[i].trim();
                let cmd = line.toLowerCase();
                
                if (cmd === 'do') stack.push({ type: 'Do', line: i });
                else if (cmd.startsWith('loop ')) {
                    let doNode = stack.pop();
                    if (doNode) jumps[i] = doNode.line;
                } 
                else if (cmd.startsWith('while ')) stack.push({ type: 'While', line: i });
                else if (cmd === 'end while') {
                    let whileNode = stack.pop();
                    if (whileNode) { jumps[whileNode.line] = i; jumps[i] = whileNode.line; }
                } 
                else if (cmd.startsWith('for ')) stack.push({ type: 'For', line: i });
                else if (cmd === 'end for') {
                    let forNode = stack.pop();
                    if (forNode) { jumps[forNode.line] = i; jumps[i] = forNode.line; }
                } 
                else if (cmd.startsWith('if ')) stack.push({ type: 'If', line: i, elseLine: null });
                else if (cmd === 'else') {
                    let top = stack[stack.length - 1];
                    if (top && top.type === 'If') top.elseLine = i;
                } 
                else if (cmd === 'end if') {
                    let top = stack.pop();
                    if (top && top.type === 'If') {
                        if (top.elseLine !== null) {
                            jumps[top.line] = top.elseLine + 1;
                            jumps[top.elseLine] = i;
                        } else {
                            jumps[top.line] = i;
                        }
                    }
                }
            }
            return jumps;
        }

        
        function createBoundedArray(size, initValue) {
            let arr = new Array(size).fill(initValue);
            return new Proxy(arr, {
                get(target, prop) {
                    if (typeof prop === 'string' && !isNaN(prop) && prop.trim() !== '') {
                        let idx = Number(prop);
                        if (!Number.isInteger(idx)) throw new Error(`Index ต้องเป็นจำนวนเต็ม (ได้ค่า ${prop})`);
                        if (idx < 0 || idx >= target.length) throw new Error(`Index Out of Bounds (ขนาดคือ ${target.length} แต่อ้างอิงช่องที่ ${idx})`);
                    }
                    return target[prop];
                },
                set(target, prop, value) {
                    if (typeof prop === 'string' && !isNaN(prop) && prop.trim() !== '') {
                        let idx = Number(prop);
                        if (!Number.isInteger(idx)) throw new Error(`Index ต้องเป็นจำนวนเต็ม (ได้ค่า ${prop})`);
                        if (idx < 0 || idx >= target.length) throw new Error(`Index Out of Bounds (ขนาดคือ ${target.length} แต่อ้างอิงช่องที่ ${idx})`);
                    }
                    target[prop] = value;
                    return true;
                }
            });
        }
async function executeProgram() {
            const codeLines = document.getElementById('code').value.split('\n');
            outputDiv.innerHTML = '<div class="text-center text-xs text-slate-400 my-2">เริ่มการทำงาน...</div>';
            
            // Clear previous errors
            document.querySelectorAll('[id^="line-"]').forEach(el => {
                el.classList.remove('!bg-red-500/30', '!border-red-500', 'animate-pulse');
            });
            
            let memory = { __for: {} }; 
            let jumps = {};
            
            try { jumps = buildJumps(codeLines); } 
            catch (e) { print(`Compiler Error: ${e.message}`, "error"); return; }

            let pc = 0; 

            while (pc < codeLines.length) {
                if (pc === undefined || isNaN(pc)) {
                    print(`Runtime Error: โปรแกรมหลุดออกจากโครงสร้าง`, "error");
                    break;
                }

                let line = codeLines[pc].trim();
                let cmd = line.toLowerCase();
                
                if (line === '') { pc++; continue; }
                if (cmd === 'function main' || cmd === 'end') { pc++; continue; }
                
                try {
                    // อัปเกรด Regex การประกาศตัวแปรให้รองรับ [dim1][dim2]
                    if (cmd.startsWith('declare ')) {
                        let typeMatch = line.match(/^Declare\s+(Integer|Real|String|Boolean)\s+(.+)$/i);
                        if (!typeMatch) throw new Error("รูปแบบ Declare ไม่ถูกต้อง: " + line);
                        
                        let type = typeMatch[1];
                        type = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
                        let varsStr = typeMatch[2];
                        
                        // แยกตัวแปรด้วยลูกน้ำ (รองรับ Declare Integer A,b,c)
                        let varsList = varsStr.split(',').map(v => v.trim());
                        
                        for (let vDecl of varsList) {
                            // รองรับชื่อเป็นคำ, ตัวเล็ก, ตัวใหญ่, array 1D, array 2D
                            let vMatch = vDecl.match(/^([a-zA-Z_][a-zA-Z0-9_]*)(?:\[([^\]]+)\])?(?:\[([^\]]+)\])?$/);
                            if (!vMatch) throw new Error("รูปแบบตัวแปรไม่ถูกต้อง: " + vDecl);
                            
                            let name = vMatch[1];
                            let dim1Expr = vMatch[2];
                            let dim2Expr = vMatch[3];
                            
                            if (dim1Expr && dim2Expr) {
                                let size1 = Number(evaluateExpression(dim1Expr, memory));
                                let size2 = Number(evaluateExpression(dim2Expr, memory));
                                let initValue = type === 'String' ? "" : 0;
                                let arr2d = createBoundedArray(size1, null);
                                for(let i=0; i<size1; i++) arr2d[i] = createBoundedArray(size2, initValue);
                                memory[name] = { 
                                    type: type, isArray: true, dims: 2, 
                                    value: arr2d
                                };
                            } else if (dim1Expr) {
                                let size1 = Number(evaluateExpression(dim1Expr, memory));
                                let initValue = type === 'String' ? "" : 0;
                                memory[name] = { type: type, isArray: true, dims: 1, value: createBoundedArray(size1, initValue) };
                            } else {
                                let initValue = type === 'String' ? "" : 0;
                                memory[name] = { type: type, isArray: false, dims: 0, value: initValue };
                            }
                        }
                        pc++;
                    }
                    // อัปเกรด Regex การรับค่า
                    else if (cmd.startsWith('input ')) {
                        let match = line.match(/^Input\s+([a-zA-Z0-9_]+)(?:\[([^\]]+)\])?(?:\[([^\]]+)\])?$/i);
                        if (!match) throw new Error("รูปแบบ Input ไม่ถูกต้อง");
                        let name = match[1], dim1Expr = match[2], dim2Expr = match[3];
                        
                        // Case-insensitive key lookup
                        let realName = Object.keys(memory).find(k => k.toLowerCase() === name.toLowerCase());
                        if (!realName) throw new Error(`ไม่พบตัวแปรชื่อ '${name}' (ต้อง Declare ก่อน)`);
                        name = realName;
                        
                        let rawInput = await requestInput(line.substring(6));
                        let castedVal = castValue(rawInput, memory[name].type);

                        if (dim1Expr && dim2Expr) {
                            memory[name].value[evaluateExpression(dim1Expr, memory)][evaluateExpression(dim2Expr, memory)] = castedVal;
                        } else if (dim1Expr) {
                            memory[name].value[evaluateExpression(dim1Expr, memory)] = castedVal;
                        } else {
                            memory[name].value = castedVal;
                        }
                        pc++;
                    }
                    // อัปเกรด Regex การคำนวณและเก็บค่า
                    else if (cmd.startsWith('assign ')) {
                        let match = line.match(/^Assign\s+([a-zA-Z0-9_]+)(?:\[([^\]]+)\])?(?:\[([^\]]+)\])?\s*=\s*(.*)$/i);
                        if (!match) throw new Error("รูปแบบ Assign ไม่ถูกต้อง");
                        let name = match[1], dim1Expr = match[2], dim2Expr = match[3], valueExpr = match[4];
                        
                        let realName = Object.keys(memory).find(k => k.toLowerCase() === name.toLowerCase() && k !== '__for');
                        if (!realName) throw new Error(`ไม่พบตัวแปรชื่อ '${name}' (ต้อง Declare ก่อน)`);
                        name = realName;
                        
                        let resultVal = evaluateExpression(valueExpr, memory);
                        let castedVal = castValue(resultVal, memory[name].type);

                        if (dim1Expr && dim2Expr) {
                            memory[name].value[evaluateExpression(dim1Expr, memory)][evaluateExpression(dim2Expr, memory)] = castedVal;
                        } else if (dim1Expr) {
                            memory[name].value[evaluateExpression(dim1Expr, memory)] = castedVal;
                        } else {
                            memory[name].value = castedVal;
                        }
                        pc++;
                    }
                    else if (cmd.startsWith('output ')) {
                        print(evaluateExpression(line.substring(7).trim(), memory));
                        pc++;
                    }
                    
                    // --- Control Flows ---
                    else if (cmd.startsWith('if ')) {
                        let condition = line.substring(3).trim();
                        if (condition.toLowerCase().endsWith(' then')) {
                            condition = condition.substring(0, condition.length - 5).trim();
                        }
                        if (evaluateExpression(condition, memory, true)) pc++; 
                        else pc = jumps[pc]; 
                    }
                    else if (cmd === 'else') pc = jumps[pc]; 
                    else if (cmd === 'end if') pc++;
                    
                    else if (cmd === 'do') pc++;
                    else if (cmd.startsWith('loop ')) {
                        if (evaluateExpression(line.substring(5).trim(), memory, true)) pc = jumps[pc]; 
                        else pc++; 
                    }
                    else if (cmd.startsWith('while ')) {
                        if (evaluateExpression(line.substring(6).trim(), memory, true)) pc++; 
                        else pc = jumps[pc] + 1; 
                    }
                    else if (cmd === 'end while') pc = jumps[pc]; 
                    else if (cmd.startsWith('for ')) {
                        let match = line.match(/^For\s+([a-zA-Z0-9_]+)\s*=\s*(.*?)\s+To\s+(.*?)(?:\s+Step\s+(.*))?$/i);
                        let name = match[1], startExpr = match[2], endExpr = match[3], stepExpr = match[4] || "1";
                        
                        let realName = Object.keys(memory).find(k => k.toLowerCase() === name.toLowerCase() && k !== '__for');
                        if (!realName) throw new Error(`ไม่พบตัวแปรชื่อ '${name}' (ต้อง Declare ก่อน)`);
                        name = realName;
                        
                        if (!memory.__for[pc]) {
                            memory[name].value = castValue(evaluateExpression(startExpr, memory), memory[name].type);
                            memory.__for[pc] = { end: evaluateExpression(endExpr, memory), step: evaluateExpression(stepExpr, memory), varName: name };
                        }
                        let fData = memory.__for[pc];
                        if (fData.step >= 0 ? memory[name].value <= fData.end : memory[name].value >= fData.end) pc++; 
                        else { delete memory.__for[pc]; pc = jumps[pc] + 1; }
                    }
                    else if (cmd === 'end for') {
                        let forPc = jumps[pc];
                        memory[memory.__for[forPc].varName].value += memory.__for[forPc].step;
                        pc = forPc;
                    }
                    else {
                        throw new Error(`ไม่รู้จักคำสั่ง: '${line}'`);
                    }
                } catch (error) {
                    print(`❌ ข้อผิดพลาดบรรทัดที่ ${pc+1}: ${error.message}`, "error");
                    let errLine = document.getElementById(`line-${pc}`);
                    if (errLine) {
                        errLine.classList.add('!bg-red-500/30', '!border-red-500', 'animate-pulse');
                    }
                    break; 
                }
            }
            print('จบการทำงาน', 'sys');
        }
    

        // ================= EXAM SYSTEM LOGIC =================
        let currentQuestion = null;
        let timerInterval = null;
        let secondsElapsed = 0;
        let examMode = ''; // 'practice', 'exam', 'solution'
        let examDuration = 60 * 60; // 60 minutes
        
        function initExamSystem() {
            const examSelect = document.getElementById('exam-select');
            if (typeof examDatabase !== 'undefined') {
                examDatabase.forEach((exam, i) => {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = exam.name;
                    examSelect.appendChild(option);
                });
            }
        }
        
        function onExamChange() {
            const eIdx = document.getElementById('exam-select').value;
            const qSelect = document.getElementById('question-select');
            const display = document.getElementById('problem-display');
            
            qSelect.innerHTML = '<option value="">-- กรุณาเลือกข้อ --</option>';
            display.classList.add('hidden');
            
            if (eIdx === "") {
                qSelect.disabled = true;
                return;
            }
            
            qSelect.disabled = false;
            examDatabase[eIdx].questions.forEach((q, i) => {
                const opt = document.createElement('option');
                opt.value = i;
                opt.textContent = `ข้อ ${i+1}`;
                qSelect.appendChild(opt);
            });
        }
        
        function onQuestionChange() {
            const eIdx = document.getElementById('exam-select').value;
            const qIdx = document.getElementById('question-select').value;
            const display = document.getElementById('problem-display');
            
            if (eIdx === "" || qIdx === "") {
                display.classList.add('hidden');
                return;
            }
            
            currentQuestion = examDatabase[eIdx].questions[qIdx];
            document.getElementById('problem-text').textContent = currentQuestion.problem;
            display.classList.remove('hidden');
        }
        
        function updateTimerDisplay() {
            if (examMode === 'solution') {
                document.getElementById('timer-display').parentElement.style.display = 'none';
                return;
            } else {
                document.getElementById('timer-display').parentElement.style.display = 'block';
            }
            
            let s = examMode === 'practice' ? secondsElapsed : Math.max(0, examDuration - secondsElapsed);
            let mins = Math.floor(s / 60).toString().padStart(2, '0');
            let secs = (s % 60).toString().padStart(2, '0');
            document.getElementById('timer-display').textContent = `${mins}:${secs}`;
            
            if (examMode === 'exam' && s <= 0) {
                clearInterval(timerInterval);
                alert("หมดเวลาทำข้อสอบแล้ว! ระบบจะทำการส่งข้อสอบอัตโนมัติ");
                submitExam(true);
            }
        }
        
        function startTimer() {
            clearInterval(timerInterval);
            secondsElapsed = 0;
            updateTimerDisplay();
            timerInterval = setInterval(() => {
                secondsElapsed++;
                updateTimerDisplay();
            }, 1000);
        }
        
        function setupEditorUI(mode) {
            document.getElementById('exam-portal').style.display = 'none';
            document.getElementById('exam-status-bar').classList.remove('hidden');
            document.getElementById('editor-container').style.display = 'grid'; // Ensure it's shown!
            
            const eIdx = document.getElementById('exam-select').value;
            const qIdx = document.getElementById('question-select').value;
            
            // Random question for exam mode
            let displayTitle = '';
            if (mode === 'exam') {
                 let allQs = [];
                 examDatabase.forEach(e => e.questions.forEach(q => allQs.push({q: q, name: e.name})));
                 let randQ = allQs[Math.floor(Math.random() * allQs.length)];
                 currentQuestion = randQ.q;
                 displayTitle = `แบบทดสอบสุ่ม - ${randQ.name}`;
                 document.getElementById('output').innerHTML = '<div class="text-center text-slate-500 mt-10">หน้าจอ Console ถูกปิดใช้งานในโหมดสอบจริง</div>';
            } else {
                 displayTitle = `${examDatabase[eIdx].name} - ข้อ ${parseInt(qIdx)+1}`;
                 document.getElementById('output').innerHTML = '<div class="text-slate-400 text-sm text-center mt-10">หน้าจอแสดงผลลัพธ์</div>';
            }
            
            document.getElementById('status-exam-name').textContent = displayTitle;
            document.getElementById('active-problem-text').textContent = currentQuestion.problem;
            
            const btnRun = document.getElementById('btn-run-code');
            const btnSubmit = document.getElementById('btn-submit-exam');
            const outputPanel = document.getElementById('panel-monitor');
            
            examMode = mode;
            
            if (mode === 'practice' || mode === 'solution') {
                document.getElementById('status-mode-label').textContent = mode === 'practice' ? 'โหมดทดลองทำ' : 'โหมดดูเฉลย';
                document.getElementById('status-mode-label').className = 'text-xs font-bold uppercase tracking-wide text-emerald-500';
                document.getElementById('timer-label').textContent = 'เวลาที่ใช้';
                
                btnRun.style.display = 'flex';
                btnSubmit.style.display = 'none';
                outputPanel.style.opacity = '1';
                outputPanel.style.pointerEvents = 'auto';
                
            } else if (mode === 'exam') {
                document.getElementById('status-mode-label').textContent = 'โหมดสอบจริง';
                document.getElementById('status-mode-label').className = 'text-xs font-bold uppercase tracking-wide text-rose-500';
                document.getElementById('timer-label').textContent = 'เวลาที่เหลือ';
                
                btnRun.style.display = 'none';
                btnSubmit.style.display = 'flex';
                
                outputPanel.style.opacity = '0.7'; // dimmed but readable
                outputPanel.style.pointerEvents = 'none';
            }
        }
        
        function viewSolution() {
            if (!currentQuestion) return;
            setupEditorUI('solution');
            document.getElementById('code').value = currentQuestion.solution || "Function Main\n\nEnd";
            updateEditor();
            startTimer();
        }
        
        function startPractice() {
            if (!currentQuestion) return;
            setupEditorUI('practice');
            document.getElementById('code').value = "Function Main\n\nEnd";
            updateEditor();
            startTimer();
        }
        
        function startRealExam() {
            if (confirm("คำเตือน: คุณกำลังเข้าสู่โหมดสอบจริง!\n\n- จะมีการสุ่มข้อสอบ 1 ข้อ\n- จับเวลา 60 นาที\n- คุณจะไม่สามารถรันโค้ดเพื่อดูผลลัพธ์ได้ (Console ปิดการใช้งาน)\n- ต้องกด 'ส่งข้อสอบ' เมื่อทำเสร็จ\n\nคุณพร้อมหรือไม่?")) {
                setupEditorUI('exam');
                document.getElementById('code').value = "Function Main\n\nEnd";
                updateEditor();
                startTimer();
            }
        }
        
        function exitExam() {
            if (confirm("ต้องการกลับไปหน้าหลักหรือไม่? โค้ดที่พิมพ์ไว้จะหายไป")) {
                clearInterval(timerInterval);
                document.getElementById('exam-portal').style.display = 'flex';
                document.getElementById('exam-status-bar').classList.add('hidden');
                document.getElementById('editor-container').style.display = 'none';
            }
        }
        
        function submitExam(auto = false) {
            if (auto || confirm("คุณแน่ใจหรือไม่ว่าต้องการส่งข้อสอบ? ระบบจะหยุดเวลาทันที")) {
                clearInterval(timerInterval);
                alert("ส่งข้อสอบเรียบร้อยแล้ว! (จำลองการส่งลงฐานข้อมูล)");
                exitExam();
            }
        }
        
        setTimeout(initExamSystem, 100);

</script>

</body>
</html>