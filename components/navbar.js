/**
 * PRUMED Shared Navbar Component
 * ================================
 * Bu dosya tüm sayfalarda ortak kullanılan navbar'ı oluşturur.
 * Yeni menü eklemek veya mevcut menüyü değiştirmek için sadece bu dosyayı düzenleyin.
 * 
 * Kullanım: Her HTML dosyasında <body> açılışından hemen sonra:
 *   <div id="navbar-container"></div>
 *   <script src="../components/navbar.js"></script>
 */

(function () {
    // ==========================================
    // MENÜ ÖĞELERİ - Yeni sayfa eklemek için buraya ekleyin
    // ==========================================
    const menuItems = [
        { label: "Ana Sayfa", folder: "ana_sayfa", file: "anasayfa.html" },
        { label: "Hakkımızda", folder: "hakkimizda", file: "hakkimizda.html" },
        { label: "Etkinlikler", folder: "etkinlikler", file: "etkinlikler.html" },
        { label: "Komisyonlar", folder: "komisyonlar", file: "komisyonlar.html" },
        { label: "Haberler", folder: "haberler", file: "haberler.html" },
        { label: "Mentorluk", folder: "mentorluk", file: "mentorluk.html" },
        { label: "Üyelik", folder: "uyelik", file: "uyelik.html" },
        { label: "İletişim", folder: "iletisim", file: "iletisim.html" },
    ];

    // Aktif sayfayı URL'den otomatik algıla
    const currentPath = window.location.pathname;

    function isActive(item) {
        return currentPath.includes("/" + item.folder + "/");
    }

    // Menü linklerini oluştur
    function buildNavLinks() {
        return menuItems.map(item => {
            const href = `../${item.folder}/${item.file}`;
            if (isActive(item)) {
                // Aktif sayfa stili
                return `<a class="text-[#edc14f] font-bold border-b-2 border-[#edc14f]/50 pb-1 px-3 text-sm" href="${href}">${item.label}</a>`;
            } else {
                // Normal link stili
                return `<a class="text-slate-300 dark:text-slate-400 font-medium text-sm hover:text-[#41e4c0] hover:bg-white/5 transition-all duration-300 px-3 py-2 rounded-lg" href="${href}">${item.label}</a>`;
            }
        }).join("\n                ");
    }

    // Mobil menü linklerini oluştur
    function buildMobileNavLinks() {
        return menuItems.map(item => {
            const href = `../${item.folder}/${item.file}`;
            if (isActive(item)) {
                return `<a class="text-[#edc14f] font-bold text-lg py-2" href="${href}">${item.label}</a>`;
            } else {
                return `<a class="text-slate-300 font-medium text-lg py-2 hover:text-[#41e4c0] transition-colors" href="${href}">${item.label}</a>`;
            }
        }).join("\n                    ");
    }

    // Navbar HTML'i
    const navbarHTML = `
    <nav class="fixed top-0 w-full z-50 bg-slate-950/60 dark:bg-slate-950/60 backdrop-blur-xl shadow-2xl shadow-black/40">
        <div class="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
            <!-- Brand -->
            <a class="text-2xl font-black text-[#edc14f] tracking-tighter hover:text-[#41e4c0] transition-all duration-300" href="../ana_sayfa/anasayfa.html">
                PRUMED
            </a>
            <!-- Desktop Navigation Links -->
            <div class="hidden lg:flex items-center gap-6">
                ${buildNavLinks()}
            </div>
            <!-- Mobile Menu Button -->
            <button class="lg:hidden text-primary p-2" id="mobile-menu-btn" aria-label="Menüyü aç">
                <span class="material-symbols-outlined text-3xl">menu</span>
            </button>
        </div>
        <!-- Mobile Menu Panel -->
        <div class="lg:hidden hidden flex-col gap-2 px-6 pb-6 bg-slate-950/95 backdrop-blur-xl border-t border-white/5" id="mobile-menu-panel">
            <div class="flex flex-col gap-1 pt-4">
                    ${buildMobileNavLinks()}
            </div>
        </div>
    </nav>
    `;

    // Navbar'ı sayfaya ekle
    const container = document.getElementById("navbar-container");
    if (container) {
        container.innerHTML = navbarHTML;
    }

    // Mobil menü toggle
    document.addEventListener("click", function (e) {
        const btn = document.getElementById("mobile-menu-btn");
        const panel = document.getElementById("mobile-menu-panel");
        if (!btn || !panel) return;

        if (btn.contains(e.target)) {
            panel.classList.toggle("hidden");
            panel.classList.toggle("flex");
            // İkonu değiştir
            const icon = btn.querySelector(".material-symbols-outlined");
            if (icon) {
                icon.textContent = panel.classList.contains("hidden") ? "menu" : "close";
            }
        } else if (!panel.contains(e.target)) {
            panel.classList.add("hidden");
            panel.classList.remove("flex");
            const icon = btn.querySelector(".material-symbols-outlined");
            if (icon) icon.textContent = "menu";
        }
    });
})();
