


        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#ecfdf5',
                            100: '#d1fae5',
                            500: '#10b981',
                            600: '#059669',
                            700: '#047857',
                            900: '#064e3b',
                        },
                        darkBg: '#0b1120',
                        darkCard: '#131d31',
                        darkBorder: '#23324d'
                    },
                    fontFamily: {
                        sans: ['Prompt', 'Segoe UI', 'Tahoma', 'sans-serif'],
                        mono: ['Fira Code', 'Courier New', 'monospace']
                    },
                    spacing: {
                        '0.5': '0.125rem',
                        '1.5': '0.375rem',
                        '2.5': '0.625rem',
                        '3.5': '0.875rem',
                    },
                    borderRadius: {
                        'xl': '0.75rem',
                        '2xl': '1rem',
                        '3xl': '1.5rem'
                    },
                    boxShadow: {
                        'glow': '0 0 20px rgba(16, 185, 129, 0.3)',
                        'glow-lg': '0 0 40px rgba(16, 185, 129, 0.4)',
                        'smooth': '0 8px 24px rgba(0, 0, 0, 0.12)',
                        'smooth-lg': '0 16px 40px rgba(0, 0, 0, 0.15)'
                    },
                    transitionTimingFunction: {
                        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }
                }
            }
        }
    




        // -------------------------------------------------------------------------
        // 1. DATA STORE: 72 COMPREHENSIVE QUESTIONS WITH EXACT CHAPTER MAPPING
        // -------------------------------------------------------------------------
        const fullQuizQuestions = [];

        // Fill remaining questions up to 72 with exact chapter keys
        // 72 Full Questions Statically Loaded

        // -------------------------------------------------------------------------
        // 2. FLASHCARDS DATA (52 FULL TERMS FROM ALL FILES)
        // -------------------------------------------------------------------------
        const flashcardsData = [];

        // -------------------------------------------------------------------------
        // 3. RICH 13 CHAPTERS LECTURE DETAILS & ILLUSTRATIONS
        // -------------------------------------------------------------------------
        const chapterDetails = {
            1: {
                title: "บทที่ 1: บทนำ & สถาปัตยกรรม Von Neumann (Introduction & Architecture)",
                content: `
                    <div class="space-y-3">
                        <h4 class="font-bold text-emerald-600 dark:text-emerald-400 text-base">📌 สาระสำคัญ & สถาปัตยกรรม Von Neumann</h4>
                        <p>สถาปัตยกรรมคอมพิวเตอร์ที่คิดค้นโดย John von Neumann ในปี 1945 กำหนดให้ <strong>หน่วยความจำ (Main Memory) เก็บทั้งชุดคำสั่ง (Programs) และข้อมูล (Data) ไว้ในพื้นที่เดียวกัน</strong> ซึ่งเป็นพื้นฐานของคอมพิวเตอร์ยุคปัจจุบันทั้งหมด</p>
                        <div class="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700 space-y-1">
                            <strong class="text-amber-600 dark:text-amber-400 block">5 องค์ประกอบหลักของ Von Neumann Model:</strong>
                            <p>1. <strong>Memory Unit:</strong> เก็บข้อมูลและโปรแกรมที่กำลังประมวลผล</p>
                            <p>2. <strong>Arithmetic Logic Unit (ALU):</strong> คำนวณทางคณิตศาสตร์ (+, -, ×, ÷) และตรรกศาสตร์ (AND, OR, NOT)</p>
                            <p>3. <strong>Control Unit (CU):</strong> ควบคุมการทำงาน ถอดรหัสคำสั่ง และส่งสัญญาณควบคุม</p>
                            <p>4. <strong>Input Unit:</strong> นำเข้าข้อมูลจากภายนอกเข้าสู่ระบบ</p>
                            <p>5. <strong>Output Unit:</strong> ส่งผลลัพธ์ออกสู่ภายนอก</p>
                        </div>
                    </div>
                `
            },
            2: {
                title: "บทที่ 2: ระบบตัวเลข & การคำนวณจำนวนหลัก (Number Systems & Formulas)",
                content: `
                    <div class="space-y-3">
                        <h4 class="font-bold text-teal-600 dark:text-teal-400 text-base">📌 ระบบตัวเลขโบราณ & สูตรคำนวณที่ออกสอบ</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div class="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700">
                                <strong class="text-amber-600 dark:text-amber-400">1. เลขมายา (Mayan Numerals ฐาน 20):</strong>
                                <p>• จุด (●) = 1, ขีด (▬) = 5, เปลือกหอย (🐚) = 0</p>
                                <p>• คูณตามชั้น: ชั้น 1 (×1), ชั้น 2 (×20), ชั้น 3 (×400), ชั้น 4 (×8000)</p>
                            </div>
                            <div class="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700">
                                <strong class="text-teal-600 dark:text-teal-400">2. เลขโรมัน (Roman Numerals):</strong>
                                <p>• I=1, V=5, X=10, L=50, C=100, D=500, M=1000</p>
                                <p>• ขีดบน (Vinculum): V̄ = 5,000, X̄ = 10,000</p>
                            </div>
                        </div>
                        <div class="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700 space-y-1">
                            <strong class="text-cyan-600 dark:text-cyan-400 block">สูตรคำนวณที่ต้องจำ:</strong>
                            <p>• ค่าสูงสุดของเลข k หลัก: <code>N<sub>max</sub> = b<sup>k</sup> - 1</code></p>
                            <p>• จำนวนหลักของ N: <code>K = ⌈log<sub>b</sub> N⌉</code></p>
                            <p>• จำนวนหลักอ้างอิงข้ามฐาน: <code>X = ⌈K<sub>bs</sub> × (log b<sub>s</sub> / log b<sub>d</sub>)⌉</code> (เช่น ฐาน 10 จำนวน 9 หลัก ➔ ฐาน 2 ใช้ 30 หลัก)</p>
                        </div>
                    </div>
                `
            },
            3: {
                title: "บทที่ 3: การจัดเก็บข้อมูล & มาตรฐาน IEEE 754 (Data Representation)",
                content: `
                    <div class="space-y-3">
                        <h4 class="font-bold text-cyan-600 dark:text-cyan-400 text-base">📌 การแทนจำนวนเต็มและจำนวนจริงในคอมพิวเตอร์</h4>
                        <p>• <strong>Signed Integer (8-bit Two's Comp):</strong> เก็บค่าได้ตั้งแต่ <code>-128 ถึง +127</code></p>
                        <p>• <strong>Two's Complement:</strong> ทำได้โดยกลับค่าบิตทั้งหมด (1's comp) แล้วบวกด้วย 1</p>
                        <div class="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700 space-y-1 font-mono text-sm">
                            <strong class="text-emerald-600 dark:text-emerald-400 block font-sans text-sm">โครงสร้าง IEEE 754 Single Precision 32-bit:</strong>
                            <p>• <strong>Sign (1 bit):</strong> 0 = บวก, 1 = ลบ</p>
                            <p>• <strong>Exponent (8 bits):</strong> E = Exp จริง + 127 (ไบแอส)</p>
                            <p>• <strong>Mantissa (23 bits):</strong> เศษหลังจุดทศนิยมจากการ Normalization (1.M)</p>
                            <p class="text-amber-600 dark:text-amber-400">ตัวอย่าง: -59.6875 = 1 10000100 11011101100000000000000 (0xC26ED000)</p>
                        </div>
                    </div>
                `
            },
            4: {
                title: "บทที่ 4: การดำเนินการกับข้อมูล & Bit Masking (Bit Operations)",
                content: `
                    <div class="space-y-3">
                        <h4 class="font-bold text-purple-700 dark:text-purple-300 text-base">📌 Logic Operations, Masking & Binary Subtraction</h4>
                        <p>• <strong>Unsetting / Clear Bits:</strong> ใช้ <code>AND ร่วมกับ Mask 0</code> (ตำแหน่งที่ Mask เป็น 0 จะถูกล้างเป็น 0)</p>
                        <p>• <strong>Setting Bits:</strong> ใช้ <code>OR ร่วมกับ Mask 1</code> (ตำแหน่งที่ Mask เป็น 1 จะถูกตั้งเป็น 1)</p>
                        <p>• <strong>Flipping / Toggle Bits:</strong> ใช้ <code>XOR ร่วมกับ Mask 1</code> (สลับค่าเฉพาะตำแหน่งที่ Mask เป็น 1)</p>
                        <p>• <strong>Arithmetic Shift Right:</strong> เลื่อนขวาโดยคงค่าบิตเครื่องหมาย (Sign Bit) เดิมไว้ (= หารด้วย 2)</p>
                        <p>• <strong>การหาผลลบ:</strong> <code>A - B = A + (B̄ + 1)</code></p>
                    </div>
                `
            },
            5: {
                title: "บทที่ 5: สถาปัตยกรรมคอมพิวเตอร์ & แอดเดรส (Computer Organization)",
                content: `
                    <div class="space-y-3">
                        <h4 class="font-bold text-indigo-600 dark:text-indigo-400 text-base">📌 Machine Cycle, Memory Hierarchy & I/O</h4>
                        <p>• <strong>Machine Cycle:</strong> ดึงคำสั่ง (Fetch) ➔ ถอดรหัส (Decode) ➔ ประมวลผล (Execute)</p>
                        <p>• <strong>Memory-Mapped I/O:</strong> อุปกรณ์ I/O ใช้อาณาเขตแอดเดรสร่วมกับ Main Memory</p>
                        <p>• <strong>DMA (Direct Memory Access):</strong> ถ่ายโอนข้อมูลตรงกับแรมความเร็วสูงโดยไม่ผ่าน CPU</p>
                        <p>• <strong>Address Space:</strong> ขนาดแรม <code>32 MB = 2<sup>5</sup> × 2<sup>20</sup> = 2<sup>25</sup> bytes</code> ➔ ต้องใช้บัสแอดเดรส <strong>25 บิต</strong></p>
                    </div>
                `
            },
            6: {
                title: "บทที่ 6: เครือข่ายคอมพิวเตอร์ & คลาวด์ (Computer Networks & Cloud)",
                content: `
                    <div class="space-y-3">
                        <h4 class="font-bold text-teal-600 dark:text-teal-400 text-base">📌 Topologies, OSI 7 Layers & Cloud Models</h4>
                        <p>• <strong>Star Topology:</strong> ต่อเข้าอุปกรณ์ศูนย์กลาง (Switch/Hub) หากอุปกรณ์กลางเสียระบบจะดับทั้งหมด</p>
                        <p>• <strong>OSI Layer 3 (Network):</strong> ดูแล IP Address และ Routing ข้ามเครือข่าย</p>
                        <p>• <strong>OSI Layer 4 (Transport):</strong> TCP (เชื่อถือได้ มี Handshake) vs UDP (เร็ว เหมาะกับสตรีมมิ่ง/เกม)</p>
                        <p>• <strong>Cloud:</strong> IaaS (เครื่องเซิร์ฟเวอร์/ที่เก็บข้อมูล เช่น AWS EC2, G-Drive), SaaS (แอปสำเร็จรูป เช่น Office 365)</p>
                    </div>
                `
            },
            7: {
                title: "บทที่ 7: ระบบปฏิบัติการ (Operating Systems & Deadlock)",
                content: `
                    <div class="space-y-3">
                        <h4 class="font-bold text-rose-600 dark:text-rose-400 text-base">📌 Process States, Deadlock & Memory Paging</h4>
                        <p>• <strong>Process States:</strong> Ready (รอคิว), Running (รันใน CPU), Waiting (รอ I/O) ➔ เมื่อหมด Time slot จะกลับไป <u>Ready</u></p>
                        <p>• <strong>Deadlock 4 เงื่อนไข:</strong> 1) Mutual Exclusion, 2) Hold & Wait, 3) No Preemption, 4) Circular Wait</p>
                        <p>• <strong>Internal Fragmentation:</strong> เกิดขึ้นในระบบ Paging และ Fixed Partitioning</p>
                        <p>• <strong>Demand Paging:</strong> ดึงหน้าเพจเข้าแรมเฉพาะเมื่อเกิด Page Fault</p>
                    </div>
                `
            },
            8: {
                title: "บทที่ 8: ระเบียบขั้นตอนวิธี (Algorithms, Search & Sort)",
                content: `
                    <div class="space-y-3">
                        <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base">📌 Binary Search & Sorting Algorithms</h4>
                        <p>• <strong>Binary Search:</strong> ต้องใช้กับข้อมูลที่เรียงลำดับแล้ว (Sorted) มีความซับซ้อน <code>O(log n)</code></p>
                        <p>• <strong>Selection Sort:</strong> ค้นหาค่าน้อยที่สุดในแต่ละรอบแล้วนำมาสลับไว้ตำแหน่งแรก</p>
                        <p>• <strong>Bubble Sort:</strong> เปรียบเทียบและสลับคู่ข้อมูลที่อยู่ติดกันให้ลอยขึ้นไป</p>
                        <p>• <strong>Insertion Sort:</strong> หยิบข้อมูลทีละตัวมาแทรกในตำแหน่งที่เรียงแล้ว</p>
                    </div>
                `
            },
            9: {
                title: "บทที่ 9: ภาษาโปรแกรม & ตัวแปลภาษา (Programming Languages)",
                content: `
                    <div class="space-y-3">
                        <h4 class="font-bold text-emerald-600 dark:text-emerald-400 text-base">📌 Compiler vs Interpreter & Identifiers</h4>
                        <p>• <strong>Compiler:</strong> แปลซอร์สโค้ดทั้งไฟล์เป็น Object/Machine Code ก่อนรันโปรแกรม</p>
                        <p>• <strong>Interpreter:</strong> แปลและทำงานทีละบรรทัดพร้อมแสดงผลทันที</p>
                        <p>• <strong>Identifiers:</strong> ชื่อตัวแปรต้องขึ้นต้นด้วยตัวอักษรหรือ _ ห้ามขึ้นต้นด้วยตัวเลข และห้ามตรงคำสงวน</p>
                    </div>
                `
            },
            10: {
                title: "บทที่ 10: วิศวกรรมซอฟต์แวร์ (Software Engineering SDLC)",
                content: `
                    <div class="space-y-3">
                        <h4 class="font-bold text-cyan-600 dark:text-cyan-400 text-base">📌 SDLC Models: Waterfall, Prototype & Spiral</h4>
                        <p>• <strong>Waterfall Model:</strong> ทำงานเป็นลำดับขั้นน้ำตก แต่ละเฟสต้องเสร็จสมบูรณ์ก่อนเริ่มเฟสถัดไป</p>
                        <p>• <strong>Prototyping Model:</strong> สร้างระบบต้นแบบรวดเร็วให้ผู้ใช้ทดลองใช้เพื่อรับฟีดแบ็ก</p>
                        <p>• <strong>Spiral Model:</strong> เน้นการวิเคราะห์และบริหารความเสี่ยง (Risk Analysis) ในทุกรอบวงวน</p>
                    </div>
                `
            },
            12: {
                title: "บทที่ 12: โครงสร้างข้อมูล & ต้นไม้ไบนารี (Data Structures & Trees)",
                content: `
                    <div class="space-y-3">
                        <h4 class="font-bold text-indigo-600 dark:text-indigo-400 text-base">📌 Stack, Queue, Tree & Graph Traversals</h4>
                        <p>• <strong>Stack:</strong> LIFO (Push / Pop), <strong>Queue:</strong> FIFO (Enqueue / Dequeue)</p>
                        <p>• <strong>Tree:</strong> Root Node (Indegree = 0), Leaf Node (Outdegree = 0)</p>
                        <p>• <strong>Preorder Traversal:</strong> ราก ➔ ซ้าย ➔ ขวา (MLR)</p>
                        <p>• <strong>Inorder Traversal:</strong> ซ้าย ➔ ราก ➔ ขวา (LMR)</p>
                        <p>• <strong>Postorder Traversal:</strong> ซ้าย ➔ ขวา ➔ ราก (LRM)</p>
                    </div>
                `
            },
            13: {
                title: "บทที่ 13: แฟ้มข้อมูล, Hashing & ฐานข้อมูล SQL (Databases)",
                content: `
                    <div class="space-y-3">
                        <h4 class="font-bold text-teal-600 dark:text-teal-400 text-base">📌 Hashing, Relational Model & SQL Queries</h4>
                        <p>• <strong>Modulo Division:</strong> <code>Address = (Key mod M) + 1</code> (แก้ Collision ด้วย Separate Chaining)</p>
                        <p>• <strong>Relational Model:</strong> Relation (ตาราง), Tuple (แถว), Attribute (คอลัมน์)</p>
                        <p>• <strong>SQL Commands:</strong> SELECT (ดึงข้อมูล), WHERE (เงื่อนไข), GROUP BY (จัดกลุ่ม), ORDER BY (เรียงลำดับ)</p>
                        <p>• <strong>ER-Diagram:</strong> Rectangle (Entity), Ellipse (Attribute), Double Ellipse (Multivalued)</p>
                    </div>
                `
            }
        };

        function openChapterDetail(chNum) {
            const ch = chapterDetails[chNum];
            if (!ch) return;
            document.getElementById('ch-modal-title').innerText = ch.title;
            document.getElementById('ch-modal-content').innerHTML = ch.content;
            document.getElementById('chapter-modal').classList.remove('hidden');
        }

        function closeChapterModal() {
            document.getElementById('chapter-modal').classList.add('hidden');
        }

        // -------------------------------------------------------------------------
        // 4. SAMPLE DATABASE FOR SQL SANDBOX
        // -------------------------------------------------------------------------
        const studentDB = [
            { StudentID: "6501001", Name: "สมชาย ใจดี", Major: "CS", GPA: 3.85 },
            { StudentID: "6501002", Name: "วิภา รักเรียน", Major: "SE", GPA: 3.92 },
            { StudentID: "6501003", Name: "กานต์ มุ่งมั่น", Major: "IT", GPA: 3.40 },
            { StudentID: "6501004", Name: "ณิชา เรียนเก่ง", Major: "CS", GPA: 3.65 },
            { StudentID: "6501005", Name: "ปิติ มีความสุข", Major: "IT", GPA: 2.95 }
        ];

        // -------------------------------------------------------------------------
        // 5. DEEP CONCEPTUAL Q&A
        // -------------------------------------------------------------------------
        const deepQAData = [
            { q: "คำถามที่ 1: จงอธิบายขั้นตอนการแปลงเลขทศนิยมฐานสิบ -59.6875 เป็นรูปแบบ IEEE 754 Single Precision (Excess-127 32-bit)", a: "<strong>ขั้นตอน:</strong> 1) Sign = 1 (ลบ), 2) 59.6875 = 111011.1011₂, 3) Normalization: 1.110111011₂ × 2<sup>5</sup> ➔ Exp = 5, 4) ไบแอส 127: E = 5 + 127 = 132 = 10000100₂, 5) Mantissa 23 บิต = 11011101100000000000000 ➔ 32-bit Output: <span class='text-emerald-600 dark:text-emerald-400 font-mono font-bold'>1 10000100 11011101100000000000000</span> (0xC26ED000)" },
            { q: "คำถามที่ 2: หากต้องการสลับค่าบิต (Toggle) ตำแหน่งที่ 3 และ 4 โดยไม่กระทบบิตอื่น ควรเลือกใช้การดำเนินการใดและตั้ง Mask อย่างไร?", a: "<strong>แนวทาง:</strong> ใช้ <strong>XOR Operation</strong> ร่วมกับ Mask ที่มีบิต 1 ในตำแหน่ง 3 และ 4 คือ 00011000₂ (24 ในฐานสิบ) เนื่องจาก XOR กับ 1 จะได้ค่าตรงข้าม แต่ XOR กับ 0 จะคงค่าเดิมไว้" },
            { q: "คำถามที่ 3: เหตุใดเมื่อโปรเซสหมดเวลาประมวลผล (Time Slot Exhausted) จึงถูกย้ายไป Ready State ไม่ใช่ Waiting State?", a: "<strong>แนวทาง:</strong> เนื่องจากโปรเซสยังพร้อมทำงานต่อ ไม่ได้ติดรอ I/O เพียงแต่ถูกถอด CPU ตามนโยบาย Time-Sharing เพื่อให้โปรเซสอื่นได้ทำงาน จึงต้องกลับไปต่อคิวใน Ready State" },
            { q: "คำถามที่ 4: จงเปรียบเทียบข้อดีและข้อเสียระหว่าง Paging (เกิด Internal Fragmentation) และ Dynamic Partitioning (เกิด External Fragmentation)", a: "<strong>แนวทาง:</strong> Paging แบ่งบล็อกคงที่ ทำให้จัดการง่ายและไม่มี External Fragmentation แต่จะเกิดเศษว่างภายในเพจสุดท้าย (Internal Fragmentation), ส่วน Dynamic Partitioning แบ่งตามขนาดจริง ไม่เกิด Internal Fragmentation แต่จะเกิดเศษว่างกระจัดกระจายภายนอก (External Fragmentation)" }
        ];

        // -------------------------------------------------------------------------
        // 6. APPLICATION STATE & GLOBALS
        // -------------------------------------------------------------------------
        let activeTab = 'dashboard';
        let currentFilter = 'all';
        let currentFlashcardFilter = 'all';
        let isAudioMuted = false;
        let userEXP = 150;
        let labBitData = [1, 1, 0, 1, 0, 0, 1, 0];
        let labBitMask = [0, 0, 0, 1, 1, 0, 0, 0];
        let labBitOp = 'AND';
        let stackItems = ['Data-A', 'Data-B', 'Data-C'];
        let queueItems = ['Task-1', 'Task-2', 'Task-3'];
        let sortArray = [45, 12, 89, 34, 67, 23, 78];
        let logicInputs = { A: 1, B: 0 };
        let cpuCycleStep = 1;
        let flowchartStep = 1;
        let flowchartSum = 0;
        let flowchartI = 1;
        let overallChartInstance = null;
        let domainChartInstance = null;

        // Exam Simulator State
        let examQuestions = [];
        let examUserAnswers = {};
        let examTimerInterval = null;
        let examSecondsRemaining = 3600;

        // -------------------------------------------------------------------------
        // 7. OFFLINE WEB AUDIO SYNTHESIZER
        // -------------------------------------------------------------------------
                
        let audioCtx = null;
        function getAudioContext() {
            if (!audioCtx && typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext)) {
                try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
            }
            if (audioCtx && audioCtx.state === 'suspended') {
                try { audioCtx.resume(); } catch(e) {}
            }
            return audioCtx;
        }

        function playBeep(freq, type, duration) {
            if (isAudioMuted) return;
            try {
                const ctx = getAudioContext();
                if (!ctx) return;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = type || 'sine';
                osc.frequency.value = freq || 440;
                gain.gain.setValueAtTime(0.1, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                osc.stop(ctx.currentTime + duration);
            } catch (e) { }
        }

        function playCorrectSound() {
            playBeep(587.33, 'triangle', 0.1);
            setTimeout(() => playBeep(880, 'sine', 0.25), 100);
        }

        function playWrongSound() {
            playBeep(220, 'sawtooth', 0.15);
            setTimeout(() => playBeep(180, 'sawtooth', 0.25), 150);
        }

        function toggleAudio() {
            isAudioMuted = !isAudioMuted;
            document.getElementById('btn-sound-toggle').innerText = isAudioMuted ? '🔇' : '🔊';
        }

        function toggleTheme() {
            // Delegated to sidebar.js setTheme()
            const isDark = document.documentElement.classList.contains('dark');
            if (typeof window.setTheme === 'function') {
                window.setTheme(isDark ? 'light' : 'dark');
            } else {
                document.documentElement.classList.toggle('dark');
                localStorage.setItem('comSciTheme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
            }
        }

        function speakQuestion(qId) {
            const q = fullQuizQuestions.find(item => item.id === qId);
            if (q) speakText(q.question);
        }

        function speakText(text) {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'th-TH';
                utterance.rate = 1.0;
                window.speechSynthesis.speak(utterance);
            }
        }

        // -------------------------------------------------------------------------
        // 8. INITIALIZATION ON DOM LOAD
        // -------------------------------------------------------------------------
        
document.addEventListener('DOMContentLoaded', () => {
    // Open sidebar by default on desktop
    if (window.innerWidth >= 1024) {
        document.body.classList.add('sidebar-open');
    }

        try { initAIAssistant(); } catch(e){}
        try { loadSavedState(); } catch(e){}
        try { if(document.getElementById('mayanInput')) calcMayanNumber(); } catch(e){}
        try { if(document.getElementById('romanInput')) calcRomanNumber(); } catch(e){}
        try { if(document.getElementById('fraction-input')) calcFractionLab(); } catch(e){}
        try { if(document.getElementById('digits-input')) calcDigitsFormula(); } catch(e){}
        try { if(document.getElementById('ieee-input')) calcIEEELab(); } catch(e){}
        try { if(document.getElementById('twos-input')) calcTwosComplement(); } catch(e){}
        try { if(document.getElementById('sub-a')) calcBinarySubtraction(); } catch(e){}
        try { if(document.getElementById('bus-bits')) calcAddressBits(); } catch(e){}
        try { if(document.getElementById('logic-a')) calcLogicCircuit(); } catch(e){}
        try { if(document.getElementById('bitwise-op')) renderBitwiseLab(); } catch(e){}
        try { if(document.getElementById('stack-container')) renderStackVisualizer(); } catch(e){}
        try { if(document.getElementById('queue-container')) renderQueueVisualizer(); } catch(e){}
        try { if(document.getElementById('sort-bars-container')) renderSortBars(); } catch(e){}
        try { if(document.getElementById('hash-table-container')) renderHashTableLab(); } catch(e){}
        try { if(document.getElementById('sql-query')) executeSQLQuery(); } catch(e){}
        try { if(document.getElementById('cpu-pc')) resetCpuCycle(); } catch(e){}
        try { if(document.getElementById('bc-input')) runBaseConverter(); } catch(e){}
        try { updateDashboardKPIs(); } catch(e){}
        
        window.addEventListener('keydown', (e) => {
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
                if (['1', '2', '3', '4'].includes(e.key)) {
                    const optIdx = parseInt(e.key) - 1;
                    const firstBtn = document.querySelector(`.q-opt-btn[data-opt="${optIdx}"]`);
                    if (firstBtn) firstBtn.click();
                }
            });
        });

        // -------------------------------------------------------------------------
        // 9. NAVIGATION & EXP LEVELING
        // -------------------------------------------------------------------------
        function switchMainTab(tabId) {
            activeTab = tabId;
            document.querySelectorAll('.main-section').forEach(sec => sec.classList.add('hidden'));
            const targetSec = document.getElementById(`section-${tabId}`);
            if (targetSec) targetSec.classList.remove('hidden');

            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active', 'text-slate-800 dark:text-white');
                btn.classList.add('text-slate-600 dark:text-slate-300');
            });

            const activeDesk = document.getElementById(`nav-${tabId}`);
            if (activeDesk) activeDesk.classList.add('active', 'text-slate-800 dark:text-white');
            const activeMob = document.getElementById(`mob-nav-${tabId}`);
            if (activeMob) activeMob.classList.add('active', 'text-slate-800 dark:text-white');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        
        // =========================================================
        // LAB: BASE CONVERTER
        // =========================================================
        function runBaseConverter() {
            const input = document.getElementById('bc-input').value.trim().toUpperCase();
            const fromBase = parseInt(document.getElementById('bc-from-base').value);
            const stepsEl = document.getElementById('bc-steps');
            
            if (!input) return;
            
            // Validate input characters for the given base
            const validChars = {2: /^[01]+$/, 8: /^[0-7]+$/, 10: /^\d+$/, 16: /^[0-9A-F]+$/};
            if (!validChars[fromBase].test(input)) {
                stepsEl.innerHTML = '<span class="text-red-400">❌ ตัวเลขไม่ถูกต้องสำหรับฐาน ' + fromBase + '</span>';
                return;
            }
            
            // Convert to decimal first
            const decVal = parseInt(input, fromBase);
            if (isNaN(decVal) || decVal < 0) {
                stepsEl.innerHTML = '<span class="text-red-400">❌ ค่าไม่ถูกต้อง</span>';
                return;
            }
            
            // Output all bases
            document.getElementById('bc-out-2').textContent = decVal.toString(2);
            document.getElementById('bc-out-8').textContent = decVal.toString(8);
            document.getElementById('bc-out-10').textContent = decVal.toString(10);
            document.getElementById('bc-out-16').textContent = decVal.toString(16).toUpperCase();
            
            // Show step-by-step for decimal to binary
            let steps = [];
            if (fromBase === 10) {
                steps.push('<span class="text-yellow-700 dark:text-yellow-300 font-bold">📌 แปลง ' + decVal + '₁₀ → ฐาน 2 (หารด้วย 2 ซ้ำ):</span>');
                let n = decVal;
                let remainders = [];
                if (n === 0) { remainders.push(0); }
                while (n > 0) {
                    steps.push(n + ' ÷ 2 = ' + Math.floor(n/2) + ' เศษ <span class="text-emerald-600 dark:text-emerald-400 font-bold">' + (n%2) + '</span>');
                    remainders.push(n % 2);
                    n = Math.floor(n / 2);
                }
                steps.push('อ่านเศษจากล่างขึ้นบน: <span class="text-emerald-600 dark:text-emerald-400 font-bold">' + remainders.reverse().join('') + '₂</span>');
                steps.push('');
                steps.push('<span class="text-cyan-600 dark:text-cyan-400 font-bold">📌 แปลง ' + decVal + '₁₀ → ฐาน 16 (หารด้วย 16):</span>');
                n = decVal; let hexRem = [];
                while (n > 0) {
                    const r = n % 16;
                    const rStr = r < 10 ? r.toString() : String.fromCharCode(55 + r);
                    steps.push(n + ' ÷ 16 = ' + Math.floor(n/16) + ' เศษ <span class="text-purple-700 dark:text-purple-400 font-bold">' + rStr + '</span>');
                    hexRem.push(rStr);
                    n = Math.floor(n / 16);
                }
                steps.push('อ่านเศษจากล่างขึ้นบน: <span class="text-purple-700 dark:text-purple-400 font-bold">' + (hexRem.reverse().join('') || '0') + '₁₆</span>');
            } else if (fromBase === 2) {
                steps.push('<span class="text-yellow-700 dark:text-yellow-300 font-bold">📌 แปลง ' + input + '₂ → ฐาน 10 (คูณด้วยค่าประจำหลัก):</span>');
                let bits = input.split('').reverse();
                let total = 0;
                let parts = [];
                bits.forEach((b, i) => { 
                    const val = parseInt(b) * Math.pow(2, i);
                    total += val;
                    parts.push(b + '×2<sup>' + i + '</sup>(' + val + ')');
                });
                steps.push(parts.reverse().join(' + ') + ' = <span class="text-blue-400 font-bold">' + total + '₁₀</span>');
                steps.push('');
                steps.push('<span class="text-orange-300 font-bold">📌 แปลง ' + input + '₂ → ฐาน 8 (จัดกลุ่มทีละ 3 บิต จากขวา):</span>');
                let padded = input.padStart(Math.ceil(input.length/3)*3, '0');
                let groups = padded.match(/.{1,3}/g) || [];
                let octParts = groups.map(g => parseInt(g, 2));
                steps.push('[ ' + groups.join(' | ') + ' ] → <span class="text-orange-400 font-bold">' + octParts.join('') + '₈</span>');
                steps.push('');
                steps.push('<span class="text-purple-700 dark:text-purple-300 font-bold">📌 แปลง ' + input + '₂ → ฐาน 16 (จัดกลุ่มทีละ 4 บิต จากขวา):</span>');
                let padded16 = input.padStart(Math.ceil(input.length/4)*4, '0');
                let groups16 = padded16.match(/.{1,4}/g) || [];
                const hexMap = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
                let hexParts = groups16.map(g => hexMap[parseInt(g, 2)]);
                steps.push('[ ' + groups16.join(' | ') + ' ] → <span class="text-purple-700 dark:text-purple-400 font-bold">' + hexParts.join('') + '₁₆</span>');
            } else if (fromBase === 16) {
                steps.push('<span class="text-yellow-700 dark:text-yellow-300 font-bold">📌 แปลง ' + input + '₁₆ → ฐาน 2 (แปลงทีละ digit เป็น 4 บิต):</span>');
                const h2b = {'0':'0000','1':'0001','2':'0010','3':'0011','4':'0100','5':'0101','6':'0110','7':'0111','8':'1000','9':'1001','A':'1010','B':'1011','C':'1100','D':'1101','E':'1110','F':'1111'};
                let binParts = input.split('').map(c => c + ' → ' + h2b[c]);
                steps.push(binParts.join(' | '));
                steps.push('รวมกัน: <span class="text-emerald-600 dark:text-emerald-400 font-bold">' + input.split('').map(c => h2b[c]).join('') + '₂</span>');
            } else if (fromBase === 8) {
                steps.push('<span class="text-yellow-700 dark:text-yellow-300 font-bold">📌 แปลง ' + input + '₈ → ฐาน 2 (แปลงทีละ digit เป็น 3 บิต):</span>');
                const o2b = {'0':'000','1':'001','2':'010','3':'011','4':'100','5':'101','6':'110','7':'111'};
                let binParts = input.split('').map(c => c + ' → ' + o2b[c]);
                steps.push(binParts.join(' | '));
                steps.push('รวมกัน: <span class="text-emerald-600 dark:text-emerald-400 font-bold">' + input.split('').map(c => o2b[c]).join('') + '₂</span>');
            }
            
            stepsEl.innerHTML = steps.map(s => '<div>' + s + '</div>').join('');
        }

        function calcBinaryAdd() {
            const aEl = document.getElementById('bc-add-a');
            const bEl = document.getElementById('bc-add-b');
            const resEl = document.getElementById('bc-add-result');
            const a = aEl.value.trim();
            const b = bEl.value.trim();
            
            if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b)) {
                resEl.classList.remove('hidden');
                resEl.innerHTML = '<span class="text-red-400">❌ กรุณาใส่เลขฐาน 2 เท่านั้น (0 และ 1)</span>';
                return;
            }
            
            const aVal = parseInt(a, 2);
            const bVal = parseInt(b, 2);
            const sum = aVal + bVal;
            const sumBin = sum.toString(2);
            
            // Show carry-bit addition
            const maxLen = Math.max(a.length, b.length) + 1;
            const aPad = a.padStart(maxLen, '0');
            const bPad = b.padStart(maxLen, '0');
            const sPad = sumBin.padStart(maxLen, '0');
            
            resEl.classList.remove('hidden');
            resEl.innerHTML = 
                '  ' + aPad + '  (' + aVal + '₁₀)<br>' +
                '+ ' + bPad + '  (' + bVal + '₁₀)<br>' +
                '<span class="text-yellow-700 dark:text-yellow-400">' + '─'.repeat(maxLen+2) + '</span><br>' +
                '= <span class="text-emerald-600 dark:text-emerald-400 font-bold">' + sPad + '</span>  (<span class="text-blue-600 dark:text-blue-400">' + sum + '₁₀</span> | <span class="text-purple-700 dark:text-purple-300">' + sum.toString(16).toUpperCase() + '₁₆</span> | <span class="text-orange-300">' + sum.toString(8) + '₈</span>)';
        }


        function scrollToLab(labId) {
            const el = document.getElementById(labId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function addEXP(points) {
            userEXP += points;
            updateEXPBadge();
            saveState();
        }

        function updateEXPBadge() {
            let level = "Lv.1 Novice";
            if (userEXP >= 500) level = "Lv.5 Grandmaster";
            else if (userEXP >= 350) level = "Lv.4 CS Scholar";
            else if (userEXP >= 200) level = "Lv.3 Adept";
            else if (userEXP >= 100) level = "Lv.2 Apprentice";

            const levelBadge = document.getElementById('user-level-badge');
            const expBadge = document.getElementById('user-exp-badge');

            if (levelBadge) levelBadge.innerText = level;
            if (expBadge) expBadge.innerText = `(${userEXP} EXP)`;
        }

        // -------------------------------------------------------------------------
        // 10. DASHBOARD & CHARTS
        // -------------------------------------------------------------------------
        function updateDashboardKPIs() {
        if(document.getElementById('kpi-exp')) document.getElementById('kpi-exp').innerText = Math.floor(userEXP);
        let lvl = Math.floor(userEXP / 100) + 1;
        if(document.getElementById('kpi-level')) document.getElementById('kpi-level').innerText = lvl;
        if(document.getElementById('kpi-progress')) document.getElementById('kpi-progress').style.width = (userEXP % 100) + '%';
        if(document.getElementById('kpi-progress-text')) document.getElementById('kpi-progress-text').innerText = `${userEXP % 100}/100`;
    }
    function initCharts() { }

        function calcMayanNumber() {
            const num = parseInt(document.getElementById('mayanInput').value) || 5125;
            let rem = num;
            const t4 = Math.floor(rem / 8000); rem %= 8000;
            const t3 = Math.floor(rem / 400); rem %= 400;
            const t2 = Math.floor(rem / 20); rem %= 20;
            const t1 = rem;

            function glyphText(v) {
                if (v === 0) return "🐚 (เปลือกหอย = 0)";
                const bars = Math.floor(v / 5);
                const dots = v % 5;
                let bStr = Array(bars).fill("▬ (5)").join(" + ");
                let dStr = Array(dots).fill("● (1)").join(" + ");
                return `${[bStr, dStr].filter(Boolean).join(" + ")} = ${v}`;
            }

            document.getElementById('mayanOutput').innerHTML = `
                <div class="space-y-1 font-mono">
                    <p class="text-amber-600 dark:text-amber-400 font-bold">ขั้นตอนการกระจายเลขมายาของ ${num}:</p>
                    <p>• ชั้นที่ 4 (× 8000): ${t4} ➔ ${glyphText(t4)} (รวม ${t4 * 8000})</p>
                    <p>• ชั้นที่ 3 (× 400): ${t3} ➔ ${glyphText(t3)} (รวม ${t3 * 400})</p>
                    <p>• ชั้นที่ 2 (× 20): ${t2} ➔ ${glyphText(t2)} (รวม ${t2 * 20})</p>
                    <p>• ชั้นที่ 1 (× 1): ${t1} ➔ ${glyphText(t1)} (รวม ${t1 * 1})</p>
                    <p class="pt-1 text-emerald-600 dark:text-emerald-400 font-bold">🎯 ผลรวม = ${t4*8000} + ${t3*400} + ${t2*20} + ${t1} = ${num}</p>
                </div>
            `;
        }

        function calcRomanNumber() {
            const str = document.getElementById('romanInput').value.trim().toUpperCase() || "MMCMLXIX";
            const romanMap = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 };
            let total = 0, steps = [];
            for (let i = 0; i < str.length; i++) {
                const cur = romanMap[str[i]] || 0;
                const next = romanMap[str[i + 1]] || 0;
                if (next > cur) { total += (next - cur); steps.push(`(${str[i]}${str[i+1]} = ${next - cur})`); i++; }
                else { total += cur; steps.push(`${str[i]}(${cur})`); }
            }
            document.getElementById('romanOutput').innerHTML = `
                <div class="space-y-1 font-mono">
                    <p class="text-teal-600 dark:text-teal-400 font-bold">การแจกแจงค่าตัวเลขโรมัน ${str}:</p>
                    <p>• ลำดับการคำนวณ: ${steps.join(' + ')}</p>
                    <p class="pt-1 text-emerald-600 dark:text-emerald-400 font-bold">🎯 ผลลัพธ์ฐานสิบ = <span class="text-base font-black">${total}₁₀</span></p>
                </div>
            `;
        }

        function setFractionPreset(val) { document.getElementById('fractionInput').value = val; calcFractionLab(); }
        function calcFractionLab() {
            const raw = document.getElementById('fractionInput').value.trim();
            const outBox = document.getElementById('fractionOutput');
            if (!/^[01]+(\.[01]+)?$/.test(raw)) { outBox.innerHTML = `<span class="text-rose-600 dark:text-rose-400 font-bold">⚠️ กรุณากรอก 0 และ 1 เท่านั้น</span>`; return; }
            const parts = raw.split('.');
            const intPart = parts[0] || '0', fracPart = parts[1] || '';
            let intSum = 0, intSteps = [];
            for (let i = 0; i < intPart.length; i++) {
                const bit = parseInt(intPart[intPart.length - 1 - i]);
                const weight = Math.pow(2, i);
                if (bit === 1) intSum += weight;
                intSteps.unshift(`(${bit} × 2<sup>${i}</sup>)`);
            }
            let fracSum = 0, fracSteps = [];
            for (let i = 0; i < fracPart.length; i++) {
                const bit = parseInt(fracPart[i]);
                const weight = Math.pow(2, -(i + 1));
                if (bit === 1) fracSum += weight;
                fracSteps.push(`(${bit} × 2<sup>-${i + 1}</sup>)`);
            }
            const total = intSum + fracSum;
            outBox.innerHTML = `
                <p>• ส่วนเต็ม (${intPart}₂): ${intSteps.join(' + ') || '0'} = <span class="text-emerald-600 dark:text-emerald-400 font-bold">${intSum}</span></p>
                <p>• ส่วนทศนิยม (.${fracPart || '0'}₂): ${fracSteps.join(' + ') || '0'} = <span class="text-cyan-400 font-bold">${fracSum}</span></p>
                <p class="pt-1 text-sm font-bold text-slate-800 dark:text-slate-100">🎯 ผลลัพธ์ฐานสิบ: <span class="text-emerald-600 dark:text-emerald-400 font-mono">${total}₁₀</span></p>
            `;
        }

        function calcDigitsFormula() {
            const kbs = parseFloat(document.getElementById('digitsKbs').value) || 1;
            const bs = parseFloat(document.getElementById('digitsBs').value) || 10;
            const bd = parseFloat(document.getElementById('digitsBd').value) || 2;
            const ratio = Math.log(bs) / Math.log(bd);
            const rawVal = kbs * ratio;
            const result = Math.ceil(rawVal);
            document.getElementById('digitsOutput').innerHTML = `สูตร: X = ⌈${kbs} × (log ${bs} / log ${bd})⌉ = ⌈${kbs} × ${ratio.toFixed(4)}⌉ = <strong>${result} หลัก</strong>`;
        }

        function setIEEEPreset(val) { document.getElementById('ieeeInput').value = val; calcIEEELab(); }
        function calcIEEELab() {
            const raw = parseFloat(document.getElementById('ieeeInput').value) || 5.75;
            const buffer = new ArrayBuffer(4);
            const view = new DataView(buffer);
            view.setFloat32(0, raw, false);
            const uint32 = view.getUint32(0);
            const bitString = uint32.toString(2).padStart(32, '0');
            const sBit = bitString[0], expBits = bitString.slice(1, 9), mantissaBits = bitString.slice(9);
            const expVal = parseInt(expBits, 2);
            const actualExp = expVal - 127;
            const hexVal = uint32.toString(16).toUpperCase().padStart(8, '0');

            document.getElementById('ieeeOutput').innerHTML = `
                <div class="space-y-1 font-mono">
                    <p class="text-teal-600 dark:text-teal-400 font-bold">การแปลงค่า ${raw} เป็น 32-bit Single Precision:</p>
                    <p>1. Sign Bit (S): ${raw < 0 ? '<span class="text-rose-600 dark:text-rose-400">1 (ลบ)</span>' : '<span class="text-emerald-600 dark:text-emerald-400">0 (บวก)</span>'}</p>
                    <p>2. Exponent (E = Exp + 127): ${actualExp} + 127 = ${expVal} ➔ <span class="text-amber-600 dark:text-amber-400">${expBits}₂</span></p>
                    <p>3. Mantissa (M 23 bits): <span class="text-cyan-600 dark:text-cyan-400">${mantissaBits}</span></p>
                    <div class="pt-2 border-t border-slate-300 dark:border-slate-700 flex items-center gap-2">
                        <span class="font-bold text-slate-800 dark:text-slate-100">🎯 32-bit Output:</span>
                        <span class="bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded text-emerald-600 dark:text-emerald-400 font-bold">${sBit} ${expBits} ${mantissaBits}</span>
                        <span class="text-slate-700">(0x${hexVal})</span>
                    </div>
                </div>
            `;
        }

        function calcTwosComplement() {
            const val = parseInt(document.getElementById('twosInputVal').value) || -28;
            const absVal = Math.abs(val);
            const posBin = absVal.toString(2).padStart(8, '0');
            const onesComp = posBin.split('').map(b => b === '0' ? '1' : '0').join('');
            const twosVal = (256 - absVal) & 0xFF;
            const twosBin = twosVal.toString(2).padStart(8, '0');
            document.getElementById('twosCompOutput').innerHTML = `
                <p>• ค่าบวก +${absVal}: ${posBin}₂</p>
                <p>• 1's Complement: <span class="text-amber-600 dark:text-amber-400">${onesComp}₂</span></p>
                <p>• 2's Complement (+1): <span class="text-emerald-600 dark:text-emerald-400 font-bold">${twosBin}₂</span> (${val})</p>
            `;
        }

        function calcBinarySubtraction() {
            const a = parseInt(document.getElementById('subA').value) || 45;
            const b = parseInt(document.getElementById('subB').value) || 28;
            const diff = a - b;
            const aBin = (a & 0xFF).toString(2).padStart(8, '0');
            const bTwos = ((256 - b) & 0xFF).toString(2).padStart(8, '0');
            const resBin = (diff & 0xFF).toString(2).padStart(8, '0');
            document.getElementById('subOutput').innerHTML = `
                <p>• A = ${a} (${aBin}₂)</p>
                <p>• 2's Comp ของ B = ${bTwos}₂</p>
                <p>• A + (2's B) = <span class="text-emerald-600 dark:text-emerald-400 font-bold">${resBin}₂ (${diff}₁₀)</span></p>
            `;
        }

        function toggleLogicInput(wire) {
            logicInputs[wire] = logicInputs[wire] === 1 ? 0 : 1;
            const btn = document.getElementById(`btn-input-${wire}`);
            btn.innerText = `Input ${wire}: ${logicInputs[wire]}`;
            btn.className = logicInputs[wire] === 1 ? "px-5 py-3 rounded-xl font-mono font-black text-lg bg-emerald-600 text-slate-950 shadow-md" : "px-5 py-3 rounded-xl font-mono font-black text-lg bg-slate-200 dark:bg-slate-800 text-slate-700 border border-slate-300 dark:border-slate-600";
            calcLogicCircuit();
        }

        function calcLogicCircuit() {
            const gate = document.getElementById('logicGateSelect').value;
            const a = logicInputs.A;
            const b = logicInputs.B;
            let out = 0;
            let desc = "";

            if (gate === "AND") { out = (a & b); desc = `AND Gate: ${a} AND ${b} = ${out}`; }
            else if (gate === "OR") { out = (a | b); desc = `OR Gate: ${a} OR ${b} = ${out}`; }
            else if (gate === "NOT") { out = a === 1 ? 0 : 1; desc = `NOT Gate: NOT ${a} = ${out}`; }
            else if (gate === "NAND") { out = (a & b) === 1 ? 0 : 1; desc = `NAND Gate: NOT(${a} AND ${b}) = ${out}`; }
            else if (gate === "NOR") { out = (a | b) === 1 ? 0 : 1; desc = `NOR Gate: NOT(${a} OR ${b}) = ${out}`; }
            else if (gate === "XOR") { out = (a ^ b); desc = `XOR Gate: ${a} XOR ${b} = ${out}`; }

            const lamp = document.getElementById('circuit-lamp');
            if (out === 1) {
                lamp.innerHTML = "🟡 ON (1)";
                lamp.className = "text-3xl font-black text-amber-600 dark:text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]";
            } else {
                lamp.innerHTML = "⚪ OFF (0)";
                lamp.className = "text-3xl font-black text-slate-700 dark:text-slate-400";
            }
            document.getElementById('circuit-desc').innerText = desc;
        }

        function stepCPUMachineCycle() {
            cpuCycleStep = (cpuCycleStep % 3) + 1;
            const pc = document.getElementById('cpu-pc');
            const ir = document.getElementById('cpu-ir');
            const acc = document.getElementById('cpu-acc');
            const phase = document.getElementById('cpu-phase');
            const log = document.getElementById('cpu-log');

            if (cpuCycleStep === 1) {
                phase.innerText = "1. Fetch";
                phase.className = "text-base font-bold text-purple-700 dark:text-purple-300";
                ir.innerText = "ADD M[41]";
                log.innerText = "[Fetch Phase]: CPU ดึงคำสั่ง ADD M[41] จากหน่วยความจำหลักเข้าสู่ IR (Instruction Register)";
                playBeep(440, 'sine', 0.08);
            } else if (cpuCycleStep === 2) {
                phase.innerText = "2. Decode";
                phase.className = "text-base font-bold text-cyan-600 dark:text-cyan-400";
                log.innerText = "[Decode Phase]: Control Unit ถอดรหัสคำสั่ง ADD ➔ สั่งให้ ALU เตรียมวงจรบวกและดึงค่าจากแรม";
                playBeep(554.37, 'sine', 0.08);
            } else if (cpuCycleStep === 3) {
                phase.innerText = "3. Execute";
                phase.className = "text-base font-bold text-emerald-600 dark:text-emerald-400";
                acc.innerText = "85";
                pc.innerText = "0x0002";
                log.innerText = "[Execute Phase]: ALU ประมวลผลบวกค่าสำเร็จ ➔ นำผลลัพธ์เก็บลง Accumulator (ACC) และเพิ่มค่า PC + 1";
                playCorrectSound();
            }
        }

        function stepFlowchartSimulator() {
            flowchartStep = (flowchartStep % 4) + 1;
            for (let s = 1; s <= 4; s++) {
                const el = document.getElementById(`fc-step-${s}`);
                el.className = s === flowchartStep ? "p-1.5 rounded font-bold bg-amber-500/30 text-amber-600 dark:text-amber-400 border border-amber-500" : "p-1 rounded text-slate-700";
            }
            if (flowchartStep === 3) {
                flowchartSum += flowchartI;
                const tbody = document.getElementById('flowchart-trace-body');
                tbody.innerHTML += `
                    <tr>
                        <td class="p-1.5 font-mono">รอบที่ ${flowchartI}</td>
                        <td class="p-1.5 font-mono">${flowchartI}</td>
                        <td class="p-1.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">${flowchartSum}</td>
                        <td class="p-1.5 text-emerald-600 dark:text-emerald-400 font-mono">${flowchartI < 5 ? 'จริง' : 'เท็จ (จบลูป)'}</td>
                    </tr>
                `;
                flowchartI++;
                playBeep(600, 'sine', 0.05);
            }
            if (flowchartI > 6) {
                alert(`จบลูป! ผลรวม sum ทั้งหมด = ${flowchartSum}`);
                flowchartI = 1; flowchartSum = 0;
                document.getElementById('flowchart-trace-body').innerHTML = `<tr><td class="p-1.5">เริ่มต้น</td><td class="p-1.5">1</td><td class="p-1.5">0</td><td class="p-1.5 text-emerald-600 dark:text-emerald-400">i <= 5 (จริง)</td></tr>`;
            }
        }

        function calcAddressBits() {
            const select = document.getElementById('memSizeSelect').value;
            let formula = "32 MB = 2⁵ × 2²⁰ bytes = 2²⁵ bytes ➔ ต้องใช้บัสแอดเดรส 25 บิต";
            if (select === "64MB") formula = "64 MB = 2⁶ × 2²⁰ bytes = 2²⁶ bytes ➔ ต้องใช้บัสแอดเดรส 26 บิต";
            else if (select === "128MB") formula = "128 MB = 2⁷ × 2²⁰ bytes = 2²⁷ bytes ➔ ต้องใช้บัสแอดเดรส 27 บิต";
            else if (select === "1GB") formula = "1 GB = 2³⁰ bytes ➔ ต้องใช้บัสแอดเดรส 30 บิต";
            else if (select === "4GB") formula = "4 GB = 2² × 2³⁰ bytes = 2³² bytes ➔ ต้องใช้บัสแอดเดรส 32 บิต";
            else if (select === "16GB") formula = "16 GB = 2⁴ × 2³⁰ bytes = 2³⁴ bytes ➔ ต้องใช้บัสแอดเดรส 34 บิต";
            document.getElementById('addressBusResult').innerText = formula;
        }

        // -------------------------------------------------------------------------
        // 12. LABS 8-14: OS, BITWISE, STACK, TREE, SORT, HASH, SQL
        // -------------------------------------------------------------------------
        function toggleBitLab(type, idx) {
            if (type === 'data') labBitData[idx] = labBitData[idx] === 1 ? 0 : 1;
            if (type === 'mask') labBitMask[idx] = labBitMask[idx] === 1 ? 0 : 1;
            renderBitwiseLab();
        }
        function setLabOp(op) {
            labBitOp = op;
            document.querySelectorAll('#lab-bitwise button[id^="btn-op-"]').forEach(btn => btn.className = "px-3 py-1.5 rounded-lg text-sm font-bold bg-slate-100 text-slate-800 hover:bg-slate-200");
            const activeBtn = document.getElementById(`btn-op-${op}`);
            if (activeBtn) activeBtn.className = "px-3 py-1.5 rounded-lg text-sm font-bold bg-emerald-600 text-slate-800 dark:text-white";
            renderBitwiseLab();
        }
        function renderBitwiseLab() {
            const dataContainer = document.getElementById('bitwise-data-container');
            const maskContainer = document.getElementById('bitwise-mask-container');
            const resContainer = document.getElementById('bitwise-result-container');

            dataContainer.innerHTML = labBitData.map((b, i) => `<button onclick="toggleBitLab('data', ${i})" class="w-10 h-11 rounded-xl font-mono font-bold text-sm flex items-center justify-center ${b ? 'bg-indigo-600 text-slate-800 dark:text-white' : 'bg-slate-100 dark:bg-slate-900 text-slate-700 border border-slate-300 dark:border-slate-700'}">${b}</button>`).join('');
            const dataInt = parseInt(labBitData.join(''), 2);
            document.getElementById('data-val-summary').innerText = `ฐานสิบ: ${dataInt} | ฐานสิบหก: 0x${dataInt.toString(16).toUpperCase().padStart(2, '0')}`;

            maskContainer.innerHTML = labBitMask.map((b, i) => `<button onclick="toggleBitLab('mask', ${i})" class="w-10 h-11 rounded-xl font-mono font-bold text-sm flex items-center justify-center ${b ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-100 dark:bg-slate-900 text-slate-700 border border-slate-300 dark:border-slate-700'}">${b}</button>`).join('');
            const maskInt = parseInt(labBitMask.join(''), 2);
            document.getElementById('mask-val-summary').innerText = `ฐานสิบ: ${maskInt} | ฐานสอง: ${labBitMask.join('')}₂`;

            let resultBits = [];
            if (labBitOp === 'AND') resultBits = labBitData.map((d, i) => d & labBitMask[i]);
            else if (labBitOp === 'OR') resultBits = labBitData.map((d, i) => d | labBitMask[i]);
            else if (labBitOp === 'XOR') resultBits = labBitData.map((d, i) => d ^ labBitMask[i]);
            else if (labBitOp === 'SHL') resultBits = [...labBitData.slice(1), 0];
            else if (labBitOp === 'SHR_LOGIC') resultBits = [0, ...labBitData.slice(0, 7)];
            else if (labBitOp === 'SHR_ARITH') resultBits = [labBitData[0], ...labBitData.slice(0, 7)];

            resContainer.innerHTML = resultBits.map(b => `<div class="w-10 h-11 rounded-xl font-mono font-bold text-sm flex items-center justify-center ${b ? 'bg-emerald-500 text-slate-950 font-black' : 'bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-700'}">${b}</div>`).join('');
            const resInt = parseInt(resultBits.join(''), 2);
            document.getElementById('result-val-summary').innerText = `ฐานสิบ: ${resInt} | ฐานสิบหก: 0x${resInt.toString(16).toUpperCase().padStart(2, '0')}`;
        }

        function triggerProcessLifecycle(event) {
            const readyNode = document.getElementById('node-ready');
            const runningNode = document.getElementById('node-running');
            const waitingNode = document.getElementById('node-waiting');
            const logBox = document.getElementById('process-sim-log');

            [readyNode, runningNode, waitingNode].forEach(n => n.className = "p-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/60 text-center transition-all opacity-60 scale-95");
            if (event === 'timeout') {
                readyNode.className = "p-4 rounded-xl border-2 border-amber-500 bg-amber-950/40 text-center scale-105 opacity-100 shadow-xl";
                logBox.innerHTML = `[Kernel Action]: Time Slot หมด! ➔ ปลดจาก <span class="text-emerald-600 dark:text-emerald-400 font-bold">Running</span> กลับเข้าคิว <span class="text-amber-600 dark:text-amber-400 font-bold">Ready State</span>`;
            } else if (event === 'io_request') {
                waitingNode.className = "p-4 rounded-xl border-2 border-rose-500 bg-rose-950/40 text-center scale-105 opacity-100 shadow-xl";
                logBox.innerHTML = `[Kernel Action]: ร้องขอ I/O ➔ ย้ายจาก <span class="text-emerald-600 dark:text-emerald-400 font-bold">Running</span> ไปรอที่ <span class="text-rose-600 dark:text-rose-400 font-bold">Waiting / Blocked State</span>`;
            } else if (event === 'io_done') {
                readyNode.className = "p-4 rounded-xl border-2 border-cyan-500 bg-cyan-950/40 text-center scale-105 opacity-100 shadow-xl";
                logBox.innerHTML = `[Kernel Action]: I/O เสร็จสิ้น! ➔ ย้ายจาก <span class="text-rose-600 dark:text-rose-400 font-bold">Waiting</span> กลับสู่ <span class="text-cyan-600 dark:text-cyan-400 font-bold">Ready State</span>`;
            } else if (event === 'dispatch') {
                runningNode.className = "p-4 rounded-xl border-2 border-emerald-500 bg-emerald-950/40 text-center scale-105 opacity-100 shadow-xl";
                logBox.innerHTML = `[Kernel Action]: CPU Dispatch! ➔ เลือกคิว <span class="text-amber-600 dark:text-amber-400 font-bold">Ready</span> เข้าสู่ <span class="text-emerald-600 dark:text-emerald-400 font-bold">Running State</span>`;
            }
        }

        function renderStackVisualizer() {
            document.getElementById('stack-container').innerHTML = stackItems.map((item, idx) => `
                <div class="w-11/12 py-2 px-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-slate-800 dark:text-white rounded-lg text-sm font-mono font-bold flex justify-between items-center shadow-md">
                    <span>${item}</span><span class="text-sm opacity-75">${idx === stackItems.length - 1 ? 'TOP' : ''}</span>
                </div>
            `).join('');
        }
        function pushStack() {
            const val = document.getElementById('stackInput').value.trim() || `Item-${stackItems.length + 1}`;
            if (stackItems.length >= 5) { alert("Stack Overflow!"); return; }
            stackItems.push(val);
            document.getElementById('stackInput').value = `Data-${String.fromCharCode(65 + stackItems.length)}`;
            renderStackVisualizer();
        }
        function popStack() {
            if (stackItems.length === 0) { alert("Stack Underflow!"); return; }
            stackItems.pop(); renderStackVisualizer();
        }
        function renderQueueVisualizer() {
            document.getElementById('queue-container').innerHTML = queueItems.map((item, idx) => `
                <div class="h-28 w-24 bg-gradient-to-b from-teal-600 to-teal-700 text-slate-800 dark:text-white rounded-xl text-sm font-mono font-bold flex flex-col justify-between p-2.5 shrink-0 shadow-md">
                    <span class="text-sm text-teal-700 dark:text-teal-200">${idx === 0 ? 'FRONT' : (idx === queueItems.length - 1 ? 'REAR' : '')}</span>
                    <span class="text-center my-auto">${item}</span><span class="text-[9px] text-right opacity-60">#${idx + 1}</span>
                </div>
            `).join('');
        }
        function enqueueItem() {
            const val = document.getElementById('queueInput').value.trim() || `Task-${queueItems.length + 1}`;
            if (queueItems.length >= 6) { alert("Queue Full!"); return; }
            queueItems.push(val);
            document.getElementById('queueInput').value = `Task-${queueItems.length + 1}`;
            renderQueueVisualizer();
        }
        function dequeueItem() {
            if (queueItems.length === 0) { alert("Queue Empty!"); return; }
            queueItems.shift(); renderQueueVisualizer();
        }

        function runTreeTraversal(mode) {
            ['A', 'B', 'C', 'D', 'E', 'F', 'G'].forEach(n => {
                const el = document.getElementById(`tree-node-${n}`);
                if (el) el.className = "tree-node w-10 h-10 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-900 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 text-sm shadow-md transition-all";
            });
            let sequence = [], desc = '';
            if (mode === 'preorder') { sequence = ['A', 'B', 'D', 'E', 'C', 'F', 'G']; desc = 'Preorder (Root-L-R): A ➔ B ➔ D ➔ E ➔ C ➔ F ➔ G'; }
            else if (mode === 'inorder') { sequence = ['D', 'B', 'E', 'A', 'F', 'C', 'G']; desc = 'Inorder (L-Root-R): D ➔ B ➔ E ➔ A ➔ F ➔ C ➔ G'; }
            else if (mode === 'postorder') { sequence = ['D', 'E', 'B', 'F', 'G', 'C', 'A']; desc = 'Postorder (L-R-Root): D ➔ E ➔ B ➔ F ➔ G ➔ C ➔ A'; }
            document.getElementById('tree-traversal-result').innerText = desc;
            sequence.forEach((nodeId, idx) => {
                setTimeout(() => {
                    const el = document.getElementById(`tree-node-${nodeId}`);
                    if (el) el.className = "tree-node w-11 h-11 rounded-full border-2 border-cyan-400 bg-cyan-950 text-cyan-700 dark:text-cyan-200 flex items-center justify-center font-black text-sm shadow-xl scale-110";
                }, idx * 400);
            });
        }

        function renderSortBars() {
            document.getElementById('sort-bars-container').innerHTML = sortArray.map((val, idx) => `
                <div class="flex flex-col items-center gap-1.5 flex-1">
                    <span class="text-sm font-mono text-slate-600 dark:text-slate-300 font-bold">${val}</span>
                    <div id="sort-bar-${idx}" style="height: ${val * 1.5}px;" class="w-full bg-gradient-to-t from-emerald-600 to-teal-400 rounded-t-lg transition-all"></div>
                </div>
            `).join('');
        }
        function resetSortArray() {
            sortArray = Array.from({ length: 7 }, () => Math.floor(Math.random() * 80) + 15);
            renderSortBars();
            document.getElementById('sort-step-log').innerText = "สุ่มข้อมูลอาร์เรย์ใหม่เรียบร้อยแล้ว";
        }
        async function runSortLab(algo) {
            const logBox = document.getElementById('sort-step-log');
            let arr = [...sortArray];
            if (algo === 'bubble') {
                logBox.innerText = "[Bubble Sort]: เปรียบเทียบและสลับคู่ข้อมูลที่อยู่ติดกัน...";
                for (let i = 0; i < arr.length - 1; i++) {
                    for (let j = 0; j < arr.length - i - 1; j++) {
                        if (arr[j] > arr[j + 1]) {
                            let temp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = temp;
                            sortArray = [...arr]; renderSortBars(); await new Promise(r => setTimeout(r, 200));
                        }
                    }
                }
                logBox.innerText = "✅ [Bubble Sort]: เรียงลำดับเสร็จสิ้น!";
            } else if (algo === 'selection') {
                logBox.innerText = "[Selection Sort]: ค้นหาค่าน้อยสุดมาสลับไว้ตำแหน่งแรก...";
                for (let i = 0; i < arr.length - 1; i++) {
                    let minIdx = i;
                    for (let j = i + 1; j < arr.length; j++) if (arr[j] < arr[minIdx]) minIdx = j;
                    let temp = arr[minIdx]; arr[minIdx] = arr[i]; arr[i] = temp;
                    sortArray = [...arr]; renderSortBars(); await new Promise(r => setTimeout(r, 300));
                }
                logBox.innerText = "✅ [Selection Sort]: เรียงลำดับเสร็จสิ้น!";
            } else if (algo === 'insertion') {
                logBox.innerText = "[Insertion Sort]: แทรกข้อมูลในตำแหน่งที่เรียงลำดับ...";
                for (let i = 1; i < arr.length; i++) {
                    let key = arr[i], j = i - 1;
                    while (j >= 0 && arr[j] > key) {
                        arr[j + 1] = arr[j]; j = j - 1;
                        sortArray = [...arr]; renderSortBars(); await new Promise(r => setTimeout(r, 150));
                    }
                    arr[j + 1] = key; sortArray = [...arr]; renderSortBars(); await new Promise(r => setTimeout(r, 150));
                }
                logBox.innerText = "✅ [Insertion Sort]: เรียงลำดับเสร็จสิ้น!";
            }
        }

        function renderHashTableLab() {
            const keysRaw = document.getElementById('hashKeysInput').value;
            const m = parseInt(document.getElementById('hashTableSize').value) || 7;
            const keys = keysRaw.split(',').map(k => parseInt(k.trim())).filter(k => !isNaN(k));
            const table = Array.from({ length: m }, () => []);
            keys.forEach(k => {
                const idx = (k % m) + 1;
                table[idx - 1].push(k);
            });
            document.getElementById('hashTableDisplay').innerHTML = table.map((bucket, i) => `
                <div class="flex items-center gap-3 p-2.5 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-300 dark:border-slate-700">
                    <span class="w-24 font-bold text-teal-600 dark:text-teal-400 font-mono">Index [${i + 1}]:</span>
                    <div class="flex items-center gap-2 flex-wrap">
                        ${bucket.length === 0 ? '<span class="text-slate-700 dark:text-slate-400 font-mono">-- ว่าง (Empty) --</span>' : bucket.map(k => `
                            <span class="px-3 py-1 bg-indigo-950 border border-indigo-700 text-indigo-600 dark:text-indigo-400 rounded font-bold">
                                Key: ${k} (${k} % ${m} + 1 = ${i+1})
                            </span>
                        `).join(' ➔ ')}
                        ${bucket.length > 1 ? '<span class="text-rose-600 dark:text-rose-400 text-sm font-bold">(เกิด Collision! แก้ด้วย Chaining)</span>' : ''}
                    </div>
                </div>
            `).join('');
        }

        function setSQLQuery(q) { document.getElementById('sqlQueryInput').value = q; executeSQLQuery(); }
        function executeSQLQuery() {
            const q = document.getElementById('sqlQueryInput').value.trim();
            const container = document.getElementById('sqlResultContainer');
            let results = [...studentDB];
            if (q.includes("WHERE GPA >= 3.5")) results = studentDB.filter(s => s.GPA >= 3.5);
            else if (q.includes("WHERE Major = 'CS'")) results = studentDB.filter(s => s.Major === 'CS');
            else if (q.includes("ORDER BY GPA DESC")) results = [...studentDB].sort((a, b) => b.GPA - a.GPA);

            container.innerHTML = `
                <table class="w-full text-sm sm:text-sm text-left">
                    <thead class="bg-slate-100 dark:bg-slate-900 text-teal-600 dark:text-teal-400 border-b border-slate-300 dark:border-slate-700">
                        <tr><th class="p-2.5">StudentID</th><th class="p-2.5">Name</th><th class="p-2.5">Major</th><th class="p-2.5">GPA</th></tr>
                    </thead>
                    <tbody class="divide-y divide-slate-800 text-slate-700 dark:text-slate-200 font-mono">
                        ${results.map(r => `
                            <tr class="hover:bg-slate-200">
                                <td class="p-2.5 text-emerald-600 dark:text-emerald-400 font-bold">${r.StudentID}</td>
                                <td class="p-2.5 font-sans">${r.Name}</td>
                                <td class="p-2.5">${r.Major}</td>
                                <td class="p-2.5 text-amber-600 dark:text-amber-400 font-bold">${r.GPA.toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <p class="text-sm text-slate-700 mt-2 px-1">ดึงข้อมูลสำเร็จ ${results.length} แถว (Tuples)</p>
            `;
        }

        // -------------------------------------------------------------------------
        // 13. QUIZ ENGINE (CUSTOM CHAPTER FILTER & RANDOM TEST)
        // -------------------------------------------------------------------------
        function selectAllQuizChapters(select) {
            document.querySelectorAll('#quiz-chapter-checkboxes input[type="checkbox"]').forEach(cb => cb.checked = select);
            applyCustomQuizFilter();
        }

        function applyCustomQuizFilter() {
            const selectedChs = Array.from(document.querySelectorAll('#quiz-chapter-checkboxes input[type="checkbox"]:checked')).map(cb => cb.value);
            renderQuizCards(selectedChs);
        }

        function startRandomQuiz(num) {
            const randomPick = [...fullQuizQuestions].sort(() => 0.5 - Math.random()).slice(0, num);
            renderQuizCards(null, randomPick);
        }

        function filterQuizOnlyIncorrect() {
            const incorrectList = fullQuizQuestions.filter(q => !q.userIsCorrect);
            renderQuizCards(null, incorrectList);
        }

        function renderQuizCards(allowedChapters, overrideList) {
            const container = document.getElementById('quiz-items-container');
            let filtered = overrideList || fullQuizQuestions;

            if (!overrideList && allowedChapters) {
                filtered = fullQuizQuestions.filter(q => allowedChapters.includes(q.chapter));
            }

            document.getElementById('quiz-count-display').innerText = `${filtered.length} ข้อ`;

            if (filtered.length === 0) {
                container.innerHTML = `
                    <div class="glass-panel p-8 rounded-2xl text-center space-y-2 border border-slate-300 dark:border-slate-700">
                        <p class="text-3xl">🎉</p>
                        <h4 class="font-bold text-slate-800 dark:text-white text-base sm:text-lg">ยอดเยี่ยมมาก! ไม่มีข้อสอบในเงื่อนไขนี้</h4>
                        <p class="text-sm sm:text-sm text-slate-700">กรุณาเลือกบทเรียนด้านบนเพื่อแสดงข้อสอบ</p>
                    </div>
                `;
                return;
            }

            container.innerHTML = filtered.map((q) => {
                const isAnswered = q.userAnswer !== undefined && q.userAnswer !== null;
                const isCorrect = q.userIsCorrect;

                return `
                    <div class="glass-panel p-5 rounded-2xl border ${isCorrect ? 'border-slate-300 dark:border-slate-700' : 'border-rose-800 bg-rose-950/15'} space-y-3.5 transition-all">
                        <div class="flex items-start justify-between gap-3">
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="text-sm font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-700 font-bold">
                                        ข้อที่ ${q.id} • ${q.chapterTitle}
                                    </span>
                                    <button onclick="speakText('${q.question.replace(/'/g, "\\'")}')" title="อ่านออกเสียงโจทย์" class="text-sm text-slate-700 hover:text-emerald-600 dark:text-emerald-400">
                                        🔊
                                    </button>
                                </div>
                                <h4 class="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base mt-2 leading-relaxed">
                                    ${q.question}
                                </h4>
                            </div>
                            <span class="shrink-0 px-3 py-1 rounded-full text-sm font-bold ${isCorrect ? 'bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-700' : 'bg-rose-950 text-rose-600 dark:text-rose-400 border border-rose-700'}">
                                ${isCorrect ? '✓ ตอบถูก' : '✕ ควรทบทวน'}
                            </span>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            ${q.options.map((opt, optIdx) => {
                                let optClass = "bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-slate-500";
                                if (isAnswered) {
                                    if (optIdx === q.answer) optClass = "bg-emerald-950 border-2 border-emerald-500 text-emerald-700 dark:text-emerald-200 font-bold shadow-md";
                                    else if (optIdx === q.userAnswer && !isCorrect) optClass = "bg-rose-950 border-2 border-rose-500 text-rose-200";
                                }
                                return `
                                    <button onclick="handleOptionSelect(${q.id}, ${optIdx})" data-opt="${optIdx}" class="q-opt-btn p-3 rounded-xl text-left text-sm sm:text-sm transition-all flex items-center justify-between ${optClass}">
                                        <span><strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt}</span>
                                        ${optIdx === q.answer && isAnswered ? '<span class="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>' : ''}
                                        ${optIdx === q.userAnswer && !isCorrect ? '<span class="text-rose-600 dark:text-rose-400 font-bold">✕</span>' : ''}
                                    </button>
                                `;
                            }).join('')}
                        </div>

                        <div class="bg-slate-100/90 rounded-xl p-3.5 border border-slate-300 dark:border-slate-700 text-sm sm:text-sm text-slate-700 dark:text-slate-200 space-y-1">
                            <p class="text-slate-700">คำตอบที่ถูกต้อง: <strong class="text-emerald-600 dark:text-emerald-400">${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}</strong></p>
                            <p class="text-slate-700 leading-relaxed"><strong class="text-teal-600 dark:text-teal-400">💡 คำอธิบาย/เฉลยละเอียด:</strong> ${q.explanation}</p>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function handleOptionSelect(qId, selectedOptIdx) {
            const q = fullQuizQuestions.find(item => item.id === qId);
            if (!q) return;

            q.userAnswer = selectedOptIdx;
            q.userIsCorrect = (selectedOptIdx === q.answer);

            if (q.userIsCorrect) { playCorrectSound(); addEXP(15); }
            else { playWrongSound(); }

            saveState();
            applyCustomQuizFilter();
            updateDashboardKPIs();
        }

        function resetQuizAnswers() {
            fullQuizQuestions.forEach(q => { q.userAnswer = null; q.userIsCorrect = false; });
            saveState(); applyCustomQuizFilter(); updateDashboardKPIs();
        }

        // -------------------------------------------------------------------------
        // 14. REAL EXAM SIMULATOR & REPORT CARD
        // -------------------------------------------------------------------------
        function openExamSimulator() {
            // ตรวจสอบข้อมูลข้อสอบ
            if (!fullQuizQuestions || fullQuizQuestions.length === 0) {
                alert('❌ ข้อมูลข้อสอบไม่พร้อม กรุณารีเฟรชหน้า (F5)');
                console.error('fullQuizQuestions is empty:', fullQuizQuestions);
                return;
            }

            examQuestions = [...fullQuizQuestions].sort(() => 0.5 - Math.random()).slice(0, 50);
            examUserAnswers = {};
            examSecondsRemaining = 3600;

            console.log('📝 Exam started with', examQuestions.length, 'questions');

            const examModal = document.getElementById('exam-modal');
            if (!examModal) {
                alert('❌ ไม่พบหน้าต่างการสอบ กรุณารีเฟรชหน้า');
                return;
            }

            examModal.style.display = 'flex';
            renderExamQuestionView();
            renderExamNavGrid();

            clearInterval(examTimerInterval);
            examTimerInterval = setInterval(() => {
                examSecondsRemaining--;
                const mins = Math.floor(examSecondsRemaining / 60);
                const secs = examSecondsRemaining % 60;
                document.getElementById('exam-timer-display').innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
                if (examSecondsRemaining <= 0) {
                    clearInterval(examTimerInterval);
                    alert("⏰ หมดเวลาสอบแล้ว!");
                    submitRealExam();
                }
            }, 1000);
        }

        function closeExamModal() {
            if (confirm("คุณต้องการออกจากโหมดจำลองห้องสอบหรือไม่?")) {
                clearInterval(examTimerInterval);
                document.getElementById('exam-modal').style.display = 'none';
            }
        }

        function renderExamQuestionView() {
            const container = document.getElementById('exam-questions-view');
            container.innerHTML = examQuestions.map((q, idx) => `
                <div id="exam-q-box-${idx}" class="glass-panel p-5 rounded-2xl border border-slate-300 dark:border-slate-700 space-y-3 mb-4">
                    <span class="text-sm font-mono text-amber-600 dark:text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded font-bold">ข้อที่ ${idx + 1} / 50</span>
                    <h4 class="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base">${q.question}</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        ${q.options.map((opt, optIdx) => {
                            const isSelected = examUserAnswers[idx] === optIdx;
                            return `
                                <button onclick="selectExamAnswer(${idx}, ${optIdx})" class="p-3 rounded-xl text-left text-sm sm:text-sm border transition-all ${isSelected ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md' : 'bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-slate-500'}">
                                    <strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt}
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>
            `).join('');
        }

        function selectExamAnswer(qIdx, optIdx) {
            examUserAnswers[qIdx] = optIdx;
            renderExamQuestionView();
            renderExamNavGrid();
            playBeep(440, 'sine', 0.05);
        }

        function renderExamNavGrid() {
            const nav = document.getElementById('exam-nav-grid');
            nav.innerHTML = examQuestions.map((_, idx) => {
                const isAnswered = examUserAnswers[idx] !== undefined;
                return `
                    <button onclick="document.getElementById('exam-q-box-${idx}').scrollIntoView({behavior:'smooth'})" class="w-8 h-8 rounded-lg text-sm font-mono font-bold ${isAnswered ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 dark:bg-slate-800 text-slate-700'}">
                        ${idx + 1}
                    </button>
                `;
            }).join('');
        }

        function submitRealExam() {
            console.log('🔵 submitRealExam() started...');
            clearInterval(examTimerInterval);
            
            // ซ่อน exam modal
            const examModal = document.getElementById('exam-modal');
            if (examModal) {
                examModal.style.display = 'none';
                console.log('✅ Exam modal hidden');
            } else {
                console.error('❌ exam-modal not found');
            }

            // ตรวจสอบข้อมูล
            if (!examQuestions || examQuestions.length === 0) {
                alert('⚠️ ข้อมูลข้อสอบไม่สมบูรณ์ กรุณาลองใหม่');
                console.error('examQuestions is empty:', examQuestions);
                return;
            }

            let score = 0;
            examQuestions.forEach((q, idx) => {
                // ตรวจสอบคำตอบที่ผู้ใช้เลือก กับคำตอบที่ถูกต้อง
                if (examUserAnswers[idx] !== undefined && examUserAnswers[idx] === q.answer) {
                    score++;
                }
            });

            console.log('📊 Score calculated:', score, '/', examQuestions.length);
            const pct = parseFloat(((score / examQuestions.length) * 100).toFixed(1));
            let grade = "F", icon = "⚠️";
            if (pct >= 80) { grade = "A"; icon = "🏆"; }
            else if (pct >= 75) { grade = "B+"; icon = "🎉"; }
            else if (pct >= 70) { grade = "B"; icon = "👍"; }
            else if (pct >= 65) { grade = "C+"; icon = "👌"; }
            else if (pct >= 60) { grade = "C"; icon = "📖"; }
            else if (pct >= 55) { grade = "D+"; icon = "✏️"; }
            else if (pct >= 50) { grade = "D"; icon = "⚡"; }

            // อัปเดตข้อมูลในการ์ดรายงาน
            const reportScoreEl = document.getElementById('report-score');
            const reportPctEl = document.getElementById('report-pct');
            const reportGradeEl = document.getElementById('report-grade');
            const reportBadgeEl = document.getElementById('report-badge-icon');
            const reportDiagnosisEl = document.getElementById('report-diagnosis');

            if (reportScoreEl) reportScoreEl.innerText = `${score} / ${examQuestions.length}`;
            if (reportPctEl) reportPctEl.innerText = `${pct}%`;
            if (reportGradeEl) reportGradeEl.innerText = grade;
            if (reportBadgeEl) reportBadgeEl.innerText = icon;

            // สร้างรายงานความแม่นยำรายบท
            const chapterMap = {};
            examQuestions.forEach((q, idx) => {
                if (!chapterMap[q.chapterTitle]) chapterMap[q.chapterTitle] = { total: 0, correct: 0 };
                chapterMap[q.chapterTitle].total++;
                if (examUserAnswers[idx] !== undefined && examUserAnswers[idx] === q.answer) {
                    chapterMap[q.chapterTitle].correct++;
                }
            });

            const chRows = Object.entries(chapterMap).map(([title, d]) => {
                const pctCh = parseFloat(((d.correct/d.total)*100).toFixed(0));
                const barColor = pctCh >= 70 ? 'bg-emerald-500' : pctCh >= 50 ? 'bg-amber-500' : 'bg-red-500';
                return `<div class="flex items-center gap-2 text-sm">
                    <span class="w-40 truncate text-slate-700">${title}</span>
                    <div class="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2"><div class="${barColor} h-2 rounded-full" style="width:${pctCh}%"></div></div>
                    <span class="w-12 text-right font-mono font-bold text-slate-800 dark:text-white">${d.correct}/${d.total}</span>
                </div>`;
            }).join('');

            const answered = Object.keys(examUserAnswers).length;
            const unanswered = examQuestions.length - answered;

            if (reportDiagnosisEl) {
                reportDiagnosisEl.innerHTML = `
                    <p class="font-bold text-teal-600 dark:text-teal-400 mb-2">📊 ผลวิเคราะห์ความแม่นยำรายบท:</p>
                    <div class="space-y-2 mb-3">${chRows}</div>
                    <div class="grid grid-cols-3 gap-2 text-center text-sm pt-2 border-t border-slate-300 dark:border-slate-700">
                        <div><div class="text-emerald-600 dark:text-emerald-400 font-bold text-base">${score}</div><div class="text-slate-700">ถูก</div></div>
                        <div><div class="text-red-400 font-bold text-base">${examQuestions.length - score}</div><div class="text-slate-700">ผิด</div></div>
                        <div><div class="text-amber-700 dark:text-amber-400 font-bold text-base">${unanswered}</div><div class="text-slate-700">ไม่ตอบ</div></div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 text-sm mt-3 pt-2 border-t border-slate-300 dark:border-slate-700">💡 <strong>คำแนะนำ:</strong> ${pct >= 70 ? '✅ ผลการสอบผ่านเกณฑ์ ทบทวนบทที่ยังอ่อนเพื่อเพิ่มคะแนน' : '⚠️ ต้องทบทวนเพิ่มเติมและทดลองทำข้อสอบซ้ำจนผ่านเกณฑ์ 70%'}</p>
                `;
            }

            // เพิ่ม EXP และแสดงการ์ดรายงาน
            console.log('🎯 Preparing to show report card...');
            addEXP(score * 20);
            
            // แน่ใจว่า exam-modal ถูกซ่อน
            const examMod = document.getElementById('exam-modal');
            if (examMod) {
                examMod.style.display = 'none';
                console.log('✅ Exam modal re-hidden');
            }
            
            // ตรวจสอบและแสดง report-card-modal
            console.log('🔍 Looking for report-card-modal...');
            const reportCardModal = document.getElementById('report-card-modal');
            
            if (!reportCardModal) {
                console.error('❌ CRITICAL: report-card-modal element NOT FOUND');
                alert('❌ ข้อผิดพลาด: ไม่พบการ์ดรายงาน กรุณารีเฟรชหน้า (F5)');
                return;
            }
            
            console.log('✅ report-card-modal found:', reportCardModal);
            reportCardModal.style.display = 'flex';
            console.log('✅ display set to flex');
            console.log('📺 Modal should now be visible');
            
            // ลองเลื่อนไปยังการ์ด (สำหรับบางกรณี)
            setTimeout(() => {
                try {
                    reportCardModal.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    console.log('✅ Scrolled to report card');
                } catch(e) {
                    console.warn('⚠️ Scroll failed:', e);
                }
            }, 50);
        }

        function closeReportCard() {
            document.getElementById('report-card-modal').style.display = 'none';
            switchMainTab('dashboard');
        }

        // -------------------------------------------------------------------------
        // 15. FLASHCARDS & DEEP Q&A
        // -------------------------------------------------------------------------
        function filterFlashcards(status) { currentFlashcardFilter = status; renderFlashcards(); }
        function toggleMastery(id, event) {
            event.stopPropagation();
            const f = flashcardsData.find(item => item.id === id);
            if (f) {
                f.mastered = !f.mastered;
                if (f.mastered) { playCorrectSound(); addEXP(10); }
                renderFlashcards();
                saveState();
            }
        }

        function renderFlashcards() {
            const grid = document.getElementById('flashcards-grid');
            let filtered = flashcardsData;
            if (currentFlashcardFilter === 'review') filtered = flashcardsData.filter(f => !f.mastered);
            else if (currentFlashcardFilter === 'mastered') filtered = flashcardsData.filter(f => f.mastered);

            grid.innerHTML = filtered.map((f) => `
                <div class="flashcard h-52 rounded-2xl cursor-pointer perspective" onclick="this.classList.toggle('flipped')">
                    <div class="flashcard-inner relative w-full h-full text-center">
                        <div class="flashcard-front absolute inset-0 glass-panel p-5 rounded-2xl border border-slate-300 dark:border-slate-700 flex flex-col justify-between items-center shadow-md">
                            <div class="w-full flex justify-between items-center">
                                <span class="text-sm font-mono bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full font-bold">${f.category}</span>
                                <span class="text-sm font-bold ${f.mastered ? 'text-emerald-600' : 'text-rose-600'}">${f.mastered ? '✓ จำได้แล้ว' : '✕ ต้องทบทวน'}</span>
                            </div>
                            <h4 class="font-black text-lg sm:text-xl text-slate-800 tracking-wide">${f.term}</h4>
                            <span class="text-sm text-teal-600 font-bold flex items-center gap-1">👆 คลิกเพื่อพลิกดูคำนิยาม</span>
                        </div>
                        <div class="flashcard-back absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-2xl border border-emerald-300 flex flex-col justify-between items-center shadow-md">
                            <span class="text-sm font-mono text-emerald-700 font-bold">คำนิยาม & การออกสอบ</span>
                            <p class="text-sm sm:text-sm text-slate-700 leading-relaxed">${f.def}</p>
                            <button onclick="toggleMastery(${f.id}, event)" class="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-sm font-bold text-slate-800 dark:text-white border border-emerald-700">
                                ${f.mastered ? 'ทำเครื่องหมายว่าต้องทบทวน' : 'ทำเครื่องหมายว่าจำได้แล้ว ⭐'}
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderDeepQA() {
            document.getElementById('deep-qa-container').innerHTML = deepQAData.map((item, idx) => `
                <div class="glass-panel rounded-2xl border border-slate-300 dark:border-slate-700 overflow-hidden">
                    <button onclick="toggleQABox(${idx})" class="w-full p-4 text-left font-bold text-slate-800 bg-emerald-50 hover:bg-emerald-100 flex justify-between items-center text-sm sm:text-sm transition-colors">
                        <span>${item.q}</span><span id="qa-arrow-${idx}" class="text-emerald-600 text-base font-bold">▼</span>
                    </button>
                    <div id="qa-body-${idx}" class="hidden p-4 border-t border-slate-300 text-sm sm:text-sm text-slate-700 leading-relaxed bg-white/70">
                        ${item.a}
                    </div>
                </div>
            `).join('');
        }

        function toggleQABox(idx) {
            const body = document.getElementById(`qa-body-${idx}`);
            const arrow = document.getElementById(`qa-arrow-${idx}`);
            if (body.classList.contains('hidden')) { body.classList.remove('hidden'); arrow.innerText = '▲'; }
            else { body.classList.add('hidden'); arrow.innerText = '▼'; }
        }

        function filterLessons() {
            const q = document.getElementById('lessonSearch').value.toLowerCase();
            document.querySelectorAll('.lesson-card').forEach(card => {
                card.style.display = card.innerText.toLowerCase().includes(q) ? 'block' : 'none';
            });
        }

        // -------------------------------------------------------------------------
        // 16. LOCAL STORAGE PERSISTENCE
        // -------------------------------------------------------------------------
        function saveState() {
            const state = {
                quiz: fullQuizQuestions.map(q => ({ id: q.id, userAnswer: q.userAnswer, userIsCorrect: q.userIsCorrect })),
                flashcards: flashcardsData.map(f => ({ id: f.id, mastered: f.mastered })),
                exp: userEXP
            };
            localStorage.setItem('cos1101_user_state_v5', JSON.stringify(state));
        }

        function loadSavedState() {
            const saved = localStorage.getItem('cos1101_user_state_v5');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (parsed.quiz) {
                        parsed.quiz.forEach(item => {
                            const target = fullQuizQuestions.find(q => q.id === item.id);
                            if (target) { target.userAnswer = item.userAnswer; target.userIsCorrect = item.userIsCorrect; }
                        });
                    }
                    if (parsed.flashcards) {
                        parsed.flashcards.forEach(item => {
                            const target = flashcardsData.find(f => f.id === item.id);
                            if (target) target.mastered = item.mastered;
                        });
                    }
                    if (parsed.exp) userEXP = parsed.exp;
                } catch (e) { }
            }
        }
    
function toggleSidebar() {
    document.body.classList.toggle('sidebar-open');
}

document.addEventListener('DOMContentLoaded', () => {
    // Open sidebar by default on desktop
    if (window.innerWidth >= 1024) {
        document.body.classList.add('sidebar-open');
    }

        try { initAIAssistant(); } catch(e){}
    if (!document.getElementById('gemini-overlay')) {
        const o = document.createElement('div');
        o.id = 'gemini-overlay';
        o.className = 'fixed inset-0 bg-black/50 z-30 hidden lg:hidden backdrop-blur-sm transition-all';
        o.onclick = toggleSidebar;
        document.body.appendChild(o);
    }
});



// --- AI ASSISTANT WIDGET ---
function initAIAssistant() {
    if(document.getElementById('ai-assistant')) return;
    
    const aiWidget = document.createElement('div');
    aiWidget.id = 'ai-assistant';
    aiWidget.className = 'fixed bottom-6 right-6 z-50';
    aiWidget.innerHTML = `
        <div id="ai-panel" class="hidden absolute bottom-16 right-0 w-64 bg-white dark:bg-[#1e1f20] rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 transition-all transform scale-95 opacity-0">
            <h4 class="font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-3">
                <span class="text-blue-500">✨</span> AI ผู้ช่วย
            </h4>
            <div class="space-y-2">
                <button onclick="startGuidedTour()" class="w-full text-left px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-sm font-semibold transition-colors flex items-center gap-2">
                    🔍 แนะนำวิธีใช้งาน
                </button>
                <button onclick="randomizeCurrentLab()" class="w-full text-left px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-sm font-semibold transition-colors flex items-center gap-2">
                    🎲 สุ่มโจทย์ใหม่ให้ฉัน
                </button>
            </div>
            <div id="ai-message" class="hidden mt-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-l-4 border-blue-500">
            </div>
        </div>
        <button onclick="toggleAIPanel()" class="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 flex items-center justify-center text-2xl hover:scale-105 transition-transform">
            ✨
        </button>
    `;
    document.body.appendChild(aiWidget);
}

function toggleAIPanel() {
    const panel = document.getElementById('ai-panel');
    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        setTimeout(() => { panel.classList.remove('scale-95', 'opacity-0'); panel.classList.add('scale-100', 'opacity-100'); }, 10);
    } else {
        panel.classList.remove('scale-100', 'opacity-100');
        panel.classList.add('scale-95', 'opacity-0');
        setTimeout(() => panel.classList.add('hidden'), 200);
    }
}

function startGuidedTour() {
    const msg = document.getElementById('ai-message');
    msg.classList.remove('hidden');
    msg.classList.remove('border-emerald-500');
    msg.classList.add('border-blue-500');
    
    if(document.getElementById('mayanInput')) {
        msg.innerHTML = "1️⃣ พิมพ์เลขฐานสิบในช่อง<br>2️⃣ กดปุ่ม <b>แปลงเลขมายา</b> เพื่อดูผลลัพธ์การคูณชั้นละ 20!";
    } else if(document.getElementById('bc-input')) {
        msg.innerHTML = "พิมพ์ตัวเลขในช่องด้านซ้าย แล้วดูผลลัพธ์การเปลี่ยนฐานแบบสดๆ ด้านขวาเลย!";
    } else if(document.getElementById('fraction-input')) {
        msg.innerHTML = "ลองพิมพ์ทศนิยม เช่น <b>0.625</b> แล้วกำหนดบิตเพื่อดูการคูณ 2 ต่อเนื่อง!";
    } else if(document.getElementById('ieee-input')) {
        msg.innerHTML = "ลองพิมพ์เลขทศนิยมติดลบดูสิ! ระบบจะสกัด Sign, Exponent, Fraction ให้ดูทันที";
    } else if(document.getElementById('twos-input')) {
        msg.innerHTML = "1️⃣ พิมพ์เลขติดลบ<br>2️⃣ ระบบจะกลับบิตและบวก 1 ให้อัตโนมัติ";
    } else if(document.getElementById('stack-container')) {
        msg.innerHTML = "กด <b>Push</b> เพื่อใส่ข้อมูลลงบนสุดของ Stack และกด <b>Pop</b> เพื่อดึงออกตามกฎ LIFO";
    } else if(document.getElementById('tree-node-val')) {
        msg.innerHTML = "พิมพ์เลขแล้วกด <b>Insert</b> เพื่อสร้างต้นไม้ จากนั้นลองกด <b>Inorder</b> ดูสิครับ!";
    } else if(document.getElementById('sql-query')) {
        msg.innerHTML = "เลือกคำสั่ง <b>SELECT</b> ด้านซ้าย แล้วสังเกตตารางผลลัพธ์ด้านล่างว่าเปลี่ยนไปอย่างไร!";
    } else if(document.getElementById('cpu-pc')) {
        msg.innerHTML = "กดปุ่ม <b>ก้าวถัดไป (Next Step)</b> เพื่อดูว่า CPU ดึงข้อมูลจาก RAM มาประมวลผลทีละขั้นตอนอย่างไร";
    } else {
        msg.innerHTML = "ลองคลิกปุ่มหรือเปลี่ยนค่าต่างๆ ในหน้าจอนี้เพื่อดูการทำงานของระบบได้เลยครับ!";
    }
}

function randomizeCurrentLab() {
    const msg = document.getElementById('ai-message');
    msg.classList.remove('hidden');
    msg.classList.remove('border-blue-500');
    msg.classList.add('border-emerald-500');
    msg.innerHTML = "✅ สุ่มโจทย์ให้แล้ว! ลองสังเกตผลลัพธ์ดูนะครับ";
    
    if(document.getElementById('mayanInput')) {
        document.getElementById('mayanInput').value = Math.floor(Math.random() * 10000) + 100;
        const romanOpts = ["MMXXIV", "MCMXCIX", "LXXXVIII", "DCCCLXXXVIII", "CDXLIV"];
        document.getElementById('romanInput').value = romanOpts[Math.floor(Math.random()*romanOpts.length)];
    } else if(document.getElementById('bc-input')) {
        document.getElementById('bc-input').value = Math.floor(Math.random() * 255).toString(2);
        document.getElementById('bc-from').value = "2";
        if(typeof runBaseConverter === 'function') runBaseConverter();
    } else if(document.getElementById('fraction-input')) {
        document.getElementById('fraction-input').value = (Math.random()).toFixed(4);
    } else if(document.getElementById('ieee-input')) {
        let r = (Math.random() * 200) - 100;
        document.getElementById('ieee-input').value = r.toFixed(3);
    } else if(document.getElementById('twos-input')) {
        document.getElementById('twos-input').value = -(Math.floor(Math.random() * 127) + 1);
    } else if(document.getElementById('tree-node-val')) {
        document.getElementById('tree-node-val').value = Math.floor(Math.random() * 100);
        msg.innerHTML = "✅ สุ่มเลขให้แล้ว กดปุ่ม <b>Insert</b> ตรงช่องต้นไม้ได้เลย!";
    } else if(document.getElementById('sort-bars-container')) {
        if(typeof resetSortArray === 'function') resetSortArray();
    } else if(document.getElementById('sql-query')) {
        const sel = document.getElementById('sql-query');
        sel.selectedIndex = Math.floor(Math.random() * sel.options.length);
        if(typeof executeSQLQuery === 'function') executeSQLQuery();
    } else {
        msg.innerHTML = "⚠️ ระบบสุ่มโจทย์สำหรับ Lab นี้กำลังพัฒนาครับ ลองทำเองไปก่อนน้า";
    }
}
