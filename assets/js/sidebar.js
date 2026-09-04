
// ---- Settings Panel Logic ----
window.toggleSettingsPanel = function() {
    const panel = document.getElementById('settings-panel');
    if (!panel) return;
    const isOpen = !panel.classList.contains('pointer-events-none');
    if (isOpen) {
        panel.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
    } else {
        panel.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
        updateThemeButtons();
    }
};

window.setTheme = function(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('comSciTheme', theme);
    updateThemeButtons();
};

function updateThemeButtons() {
    const isDark = document.documentElement.classList.contains('dark');
    const lightBtn = document.getElementById('btn-theme-light');
    const darkBtn = document.getElementById('btn-theme-dark');
    if (!lightBtn || !darkBtn) return;

    const activeClass = 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-400';
    const inactiveClass = 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700';

    // Reset
    [lightBtn, darkBtn].forEach(btn => {
        btn.className = btn.className.replace(/border-\S+|bg-\S+|text-\S+|hover:\S+/g, '').trim();
        btn.className = 'flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all';
    });

    if (isDark) {
        darkBtn.className += ' ' + activeClass;
        lightBtn.className += ' ' + inactiveClass;
    } else {
        lightBtn.className += ' ' + activeClass;
        darkBtn.className += ' ' + inactiveClass;
    }
}

// Apply saved theme on load
(function() {
    const saved = localStorage.getItem('comSciTheme');
    if (saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();

const sidebarCategories = [
    {
        title: "📌 หน้าหลัก",
        items: [
            {"title": "หน้าหลัก (Home)", "url": "../index.html"}
        ]
    },
    {
        title: "🔢 ระบบตัวเลข & ข้อมูล",
        items: [
            {"title": "01 เลขมายา & โรมัน", "url": "lab_01_mayan-roman.html"},
            {"title": "02 ตัวแปลงเลขฐาน", "url": "lab_02_base-convert.html"},
            {"title": "03 เลขเศษส่วน (Fraction)", "url": "lab_03_fraction.html"},
            {"title": "04 ทศนิยม (IEEE 754)", "url": "lab_04_ieee.html"},
            {"title": "05 ทูส์คอมพลีเมนต์", "url": "lab_05_twos.html"},
            {"title": "06 ตรรกะบิต (Bitwise)", "url": "lab_06_bitwise.html"}
        ]
    },
    {
        title: "⚙️ สถาปัตยกรรม & OS",
        items: [
            {"title": "07 วงจรตรรกะ (Logic)", "url": "lab_07_logic-circuits.html"},
            {"title": "08 วงรอบคำสั่ง CPU", "url": "lab_08_cpu-cycle.html"},
            {"title": "09 หน่วยความจำ OS", "url": "lab_09_os-mem.html"}
        ]
    },
    {
        title: "🧠 โครงสร้างข้อมูล & อัลกอริทึม",
        items: [
            {"title": "10 Stack & Queue", "url": "lab_10_stackqueue.html"},
            {"title": "11 ต้นไม้ค้นหา (BST)", "url": "lab_11_tree.html"},
            {"title": "12 อัลกอริทึมจัดเรียง", "url": "lab_12_sort.html"},
            {"title": "13 ผังงาน (Flowchart)", "url": "lab_13_flowchart.html"},
            {"title": "14 แฮชชิ่ง (Hashing)", "url": "lab_14_hashing.html"}
        ]
    },
    {
        title: "🌐 ฐานข้อมูล & เครือข่าย",
        items: [
            {"title": "15 ฐานข้อมูล (SQL)", "url": "lab_15_sql.html"},
            {"title": "16 โครงสร้างเครือข่าย", "url": "lab_16_network-topology.html"},
            {"title": "17 เครือข่าย (IP & DNS)", "url": "lab_17_ip-address.html"},
            {"title": "18 แบบจำลอง OSI", "url": "lab_18_osi-layers.html"},
            {"title": "19 คลาวด์คอมพิวติ้ง", "url": "lab_19_cloud-bandwidth.html"}
        ]
    },
    {
        title: "🛠️ เครื่องมือพิเศษ (Tools)",
        items: [
            {"title": "Pseudocode Simulator", "url": "lab_20_mini-flow.html"}
        ]
    },
    {
        title: "📝 ระบบฝึกสอบ (Exam)",
        items: [
            { title: "ทดสอบ Pseudocode", url: "exam_pseudocode.html" }
        ]
    }
];

window.toggleSidebarCategory = function(index) {
    const el = document.getElementById('sidebar-cat-' + index);
    const icon = document.getElementById('sidebar-icon-' + index);
    if(el) {
        el.classList.toggle('hidden');
        if (el.classList.contains('hidden')) {
            icon.style.transform = 'rotate(-90deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
    }
};




function renderSidebar(currentUrl) {
    
    const styles = `
        <style>
            #gemini-sidebar {
                transform: translateX(-100%);
            }
            body {
                padding-left: 0;
                transition: padding-left 0.3s ease;
            }
            
            body.sidebar-open #gemini-sidebar {
                transform: translateX(0);
            }
            
            @media (min-width: 1024px) {
                body.sidebar-open {
                    padding-left: 18rem; /* 72 units = 18rem */
                }
                body.sidebar-open #gemini-overlay {
                    display: none !important;
                }
            }
            
            @media (max-width: 1023px) {
                body.sidebar-open #gemini-overlay {
                    display: block;
                }
            }
        </style>
    `;
    const overlayHtml = `<div id="gemini-overlay" class="fixed inset-0 bg-black/50 z-30 hidden" onclick="toggleSidebar()"></div>`;

    const sidebarHtml = styles + overlayHtml + `

        <aside id="gemini-sidebar" class="fixed top-0 left-0 h-screen w-72 bg-[#f0f4f9] dark:bg-[#1e1f20] border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 z-40 sidebar-base-transform">
            <div class="p-4 flex items-center justify-between">
                <div class="flex items-center gap-2 px-2">
                    <span class="text-xl">✨</span>
                    <span class="font-bold text-slate-800 dark:text-slate-200 text-lg tracking-tight">COM-SCI Labs</span>
                </div>
                <button onclick="toggleSidebar()" class="lg:hidden p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-300">
                    ✕
                </button>
            </div>
            
            <div class="p-3">
                
            </div>

            <div class="flex-grow overflow-y-auto custom-scrollbar px-3 py-2 space-y-1">
                <p class="px-4 py-2 text-sm font-bold dark:text-slate-300 uppercase tracking-wider">ห้องปฏิบัติการ</p>
                ${sidebarCategories.map((cat, idx) => {
                    // Check if any item in this category is active
                    let isCatActive = false;
                    const itemsHtml = cat.items.map(item => {
                        const isRoot = currentUrl.endsWith('index.html') || !currentUrl.includes('/labs/');
                        let finalUrl = item.url;
                        if (isRoot) {
                            if (item.url === '../index.html') finalUrl = 'index.html';
                            else finalUrl = 'labs/' + item.url;
                        }
                        
                        const isActive = currentUrl.endsWith(item.url.replace('../', ''));
                        if (isActive) isCatActive = true;
                        
                        const activeClass = isActive 
                            ? 'bg-[#d3e3fd] text-[#041e49] dark:bg-[#004a77] dark:text-[#c2e7ff] font-bold' 
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50';
                            
                        return `
                            <a href="${finalUrl}" class="block px-8 py-2 rounded-full text-sm transition-colors ${activeClass} truncate">
                                ${item.title}
                            </a>
                        `;
                    }).join('');
                    
                    const hiddenClass = isCatActive ? '' : 'hidden';
                    const rotateStyle = isCatActive ? 'transform: rotate(0deg);' : 'transform: rotate(-90deg);';
                    
                    return `
                        <div class="mb-2">
                            <button onclick="toggleSidebarCategory(${idx})" class="w-full flex items-center justify-between px-4 py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-left">
                                <span class="text-left">${cat.title}</span>
                                <svg id="sidebar-icon-${idx}" style="${rotateStyle}; transition: transform 0.2s;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </button>
                            <div id="sidebar-cat-${idx}" class="${hiddenClass} mt-1 space-y-1">
                                ${itemsHtml}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="p-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
                <div class="flex items-center justify-between px-2">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 text-slate-800 dark:text-white flex items-center justify-center font-bold shadow-sm">U</div>
                        <div class="text-sm font-medium text-slate-700 dark:text-slate-300">User Mode</div>
                    </div>
                    <button onclick="toggleSettingsPanel()" class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors" title="ตั้งค่า">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    </button>
                </div>
            </div>

            <!-- Settings Panel (hidden by default) -->
            <div id="settings-panel" class="absolute bottom-[72px] left-0 w-full bg-white dark:bg-[#282a2c] border-t border-slate-200 dark:border-slate-700 shadow-lg rounded-t-2xl transform translate-y-full opacity-0 transition-all duration-300 pointer-events-none z-50" style="max-height: 60vh; overflow-y: auto;">
                <div class="p-5 space-y-5">
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                            ตั้งค่า
                        </h3>
                        <button onclick="toggleSettingsPanel()" class="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>

                    <!-- Theme Setting -->
                    <div class="space-y-2">
                        <label class="text-sm font-semibold text-slate-600 dark:text-slate-300">ธีม (Theme)</label>
                        <div class="flex gap-2">
                            <button onclick="setTheme('light')" id="btn-theme-light" class="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                สว่าง
                            </button>
                            <button onclick="setTheme('dark')" id="btn-theme-dark" class="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                มืด
                            </button>
                        </div>
                    </div>
                
                    <!-- API Key Setting -->
                    <div class="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-700">
                        <label class="text-sm font-semibold text-slate-600 dark:text-slate-300">Gemini API Key</label>
                        <div class="flex gap-2">
                            <input type="password" id="gemini-api-key-input" placeholder="Key1, Key2, Key3..." class="flex-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-indigo-500">
                            <button onclick="saveApiKey()" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-colors">Save</button>
                        </div>
                        <p class="text-xs text-slate-400 mt-1">ใส่ได้หลาย Key (คั่นด้วยลูกน้ำ ,) ระบบจะสุ่มสลับ Key ให้เพื่อกระจายโหลด (Load Balance)</p>
                    </div>
</div>
            </div>
        </aside>
    `;
    document.write(sidebarHtml);
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const keyInput = document.getElementById('gemini-api-key-input');
        if (keyInput) {
            keyInput.value = localStorage.getItem('gemini_api_key') || '';
        }
    }, 500);
});
window.saveApiKey = function() {
    const key = document.getElementById('gemini-api-key-input').value.trim();
    if (key) {
        localStorage.setItem('gemini_api_key', key);
        alert('API Key saved successfully! Reloading...');
        window.location.reload();
    } else {
        localStorage.removeItem('gemini_api_key');
        alert('API Key cleared! Reloading...');
        window.location.reload();
    }
};
