
        const outputDiv = document.getElementById('output');

        function print(msg, className = "") {
            outputDiv.innerHTML += `<div class="${className}">${msg}</div>`;
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }

        function requestInput(promptMsg) {
            return new Promise((resolve) => {
                const id = "input-" + Date.now();
                outputDiv.innerHTML += `
                    <div class="input-line" id="container-${id}">
                        <span>> ${promptMsg}: </span>
                        <input type="text" id="${id}" autocomplete="off">
                    </div>`;
                outputDiv.scrollTop = outputDiv.scrollHeight;
                const inputEl = document.getElementById(id);
                inputEl.focus();
                
                inputEl.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        let val = inputEl.value;
                        document.getElementById(`container-${id}`).innerHTML = `<span style="color: #ffaa00;">> ${val}</span>`;
                        resolve(val);
                    }
                });
            });
        }

        function castValue(val, type) {
            if (type === 'Integer') return Math.floor(Number(val)) || 0;
            if (type === 'Real') return Number(val) || 0.0;
            if (type === 'String') return String(val);
            return val;
        }

        function evaluateExpression(expr, memory, isCondition = false) {
            let parsed = expr.replace(/(?=(?:(?:[^']*'){2})*[^']*$)&/g, '+'); 
            
            if (isCondition) {
                let chunks = parsed.split(/(["'].*?["'])/g);
                parsed = chunks.map((chunk, i) => {
                    if (i % 2 === 1) return chunk;
                    return chunk.replace(/\b[oO][rR]\b/g, '||')
                                .replace(/\b[aA][nN][dD]\b/g, '&&')
                                .replace(/(?<![<>!=])=(?!=)/g, '===')
                                .replace(/<>/g, '!==');
                }).join('');
            }

            let keys = Object.keys(memory).filter(k => k !== '__for');
            let values = keys.map(k => memory[k].value); 

            try {
                let fn = new Function(...keys, `return ${parsed};`);
                return fn(...values);
            } catch (e) {
                throw new Error(`Error evaluating expression: '${expr}'`);
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

        async function executeProgram() {
            const codeLines = document.getElementById('code').value.split('\n');
            outputDiv.innerHTML = '<div class="sys-msg">Starting execution...<br>------------------------</div>';
            
            let memory = { __for: {} }; 
            let jumps = {};
            
            try { jumps = buildJumps(codeLines); } 
            catch (e) { print(`❌ Compiler Error: ${e.message}`, "error"); return; }

            let pc = 0; 

            while (pc < codeLines.length) {
                if (pc === undefined || isNaN(pc)) {
                    print(`❌ Runtime Error: โปรแกรมหลุดออกจากโครงสร้าง`, "error");
                    break;
                }

                let line = codeLines[pc].trim();
                let cmd = line.toLowerCase();
                
                if (line === '') { pc++; continue; }
                
                try {
                    // อัปเกรด Regex การประกาศตัวแปรให้รองรับ [dim1][dim2]
                    if (cmd.startsWith('declare ')) {
                        let match = line.match(/^Declare\s+(Integer|Real|String)\s+([a-zA-Z0-9_]+)(?:\[([^\]]+)\])?(?:\[([^\]]+)\])?$/i);
                        if (!match) throw new Error("รูปแบบ Declare ไม่ถูกต้อง");
                        let type = match[1], name = match[2], dim1Expr = match[3], dim2Expr = match[4];
                        type = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

                        if (dim1Expr && dim2Expr) {
                            // สร้าง 2D Array
                            let size1 = Number(evaluateExpression(dim1Expr, memory));
                            let size2 = Number(evaluateExpression(dim2Expr, memory));
                            let initValue = type === 'String' ? "" : 0;
                            memory[name] = { 
                                type: type, isArray: true, dims: 2, 
                                value: Array.from({length: size1}, () => new Array(size2).fill(initValue))
                            };
                        } else if (dim1Expr) {
                            // สร้าง 1D Array
                            let size1 = Number(evaluateExpression(dim1Expr, memory));
                            let initValue = type === 'String' ? "" : 0;
                            memory[name] = { type: type, isArray: true, dims: 1, value: new Array(size1).fill(initValue) };
                        } else {
                            // ตัวแปรธรรมดา
                            memory[name] = { type: type, isArray: false, dims: 0, value: type === 'String' ? "" : 0 };
                        }
                        pc++;
                    }
                    // อัปเกรด Regex การรับค่า
                    else if (cmd.startsWith('input ')) {
                        let match = line.match(/^Input\s+([a-zA-Z0-9_]+)(?:\[([^\]]+)\])?(?:\[([^\]]+)\])?$/i);
                        if (!match) throw new Error("รูปแบบ Input ไม่ถูกต้อง");
                        let name = match[1], dim1Expr = match[2], dim2Expr = match[3];
                        
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
                        if (evaluateExpression(line.substring(3).trim(), memory, true)) pc++; 
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
                        if (!realName) {
                            memory[name] = { type: 'Integer', value: 0 };
                        } else {
                            name = realName;
                        }
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
                    break; 
                }
            }
            print('<div class="sys-msg">------------------------<br>Execution finished</div>');
        }
    