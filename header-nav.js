// Shared Header Navigation Component
// このファイルを全ページで読み込むことで、統一されたヘッダーを表示

// 言語切り替えパスを生成
function getLanguageSwitchPath(targetLang) {
    const currentPath = window.location.pathname;

    // 現在のパスから言語部分を特定
    let newPath = currentPath;

    if (currentPath.includes('/ja/')) {
        // 日本語ページから切り替え
        newPath = currentPath.replace('/ja/', `/${targetLang}/`);
    } else if (currentPath.includes('/en/')) {
        // 英語ページから切り替え
        newPath = currentPath.replace('/en/', `/${targetLang}/`);
    } else {
        // ルートディレクトリの場合
        newPath = `/${targetLang}/index.html`;
    }

    return newPath;
}

function initSharedHeader() {
    const headerElement = document.getElementById('header');
    if (!headerElement) return;

    // 現在のページのパスから言語を判定
    const currentPath = window.location.pathname;
    const isJapanese = currentPath.includes('/ja/') || currentPath === '/ja' ||
                       (!currentPath.includes('/en/') && currentPath !== '/en');

    // ルートパスまでの相対パスを計算
    const pathDepth = (currentPath.match(/\//g) || []).length - 1;
    const rootPath = '../'.repeat(Math.max(0, pathDepth));

    // ヘッダーHTMLを生成
    const headerHTML = isJapanese ? getJapaneseHeader(rootPath) : getEnglishHeader(rootPath);

    // ヘッダーを挿入
    headerElement.innerHTML = headerHTML;

    // 初期化関数を実行（少し遅延させてDOM更新を待つ）
    setTimeout(() => {
        initMobileMenu();
        initDropdownMenus();
        initHeaderScroll();
    }, 0);
}

// ヘッダースクロールエフェクト
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScrollY = 0;
    let ticking = false;

    function updateHeader() {
        const scrollY = window.pageYOffset;

        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });
}

// ドロップダウンメニュー機能
function initDropdownMenus() {
    const dropdowns = document.querySelectorAll('.dropdown');
    if (!dropdowns.length) return;

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');
        let isOpen = false;
        let closeTimeout;

        if (!menu) return;

        // モバイルでのタッチ対応
        if ('ontouchstart' in window) {
            link.addEventListener('click', function(e) {
                // ドロップダウンがある場合のみ処理
                if (menu) {
                    e.preventDefault();
                    e.stopPropagation();

                    // 他のドロップダウンを閉じる
                    dropdowns.forEach(other => {
                        if (other !== dropdown) {
                            other.classList.remove('active');
                        }
                    });

                    // トグル
                    isOpen = !isOpen;
                    dropdown.classList.toggle('active', isOpen);
                }
            });
        }

        // デスクトップでのマウス対応
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(closeTimeout);
            dropdown.classList.add('active');
        });

        dropdown.addEventListener('mouseleave', function() {
            closeTimeout = setTimeout(() => {
                dropdown.classList.remove('active');
            }, 200);
        });
    });

    // 外側クリックで閉じる
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

function getJapaneseHeader(rootPath) {
    return `
        <nav>
            <a href="${rootPath}ja/index.html">
                <img src="${rootPath}logo.png" alt="Asahi Cleaning" class="logo">
            </a>
            <ul class="nav-links" id="navLinks">
                <li class="dropdown">
                    <a href="${rootPath}ja/index.html#services">サービス <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <a href="${rootPath}ja/services/airbnb-cleaning.html" class="dropdown-item">
                            <span class="dropdown-icon">🏠</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Airbnb清掃</span>
                                <span class="dropdown-desc">ゲスト満足度を高める徹底清掃</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/services/luxury-residential-cleaning.html" class="dropdown-item">
                            <span class="dropdown-icon">✨</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">高級住宅清掃</span>
                                <span class="dropdown-desc">富裕層向けプレミアムサービス</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/services/office-cleaning.html" class="dropdown-item">
                            <span class="dropdown-icon">🏢</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">オフィス清掃</span>
                                <span class="dropdown-desc">快適な職場環境を維持</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/services/deep-cleaning.html" class="dropdown-item">
                            <span class="dropdown-icon">🧹</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">ディープクリーニング</span>
                                <span class="dropdown-desc">隅々まで徹底的に清掃</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/services/japanese-style-styling.html" class="dropdown-item">
                            <span class="dropdown-icon">🌸</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">和風空間演出</span>
                                <span class="dropdown-desc">日本の美意識を活かした空間</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/services/regular-cleaning-plan.html" class="dropdown-item">
                            <span class="dropdown-icon">🔄</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">定期清掃プラン</span>
                                <span class="dropdown-desc">継続的な清潔を保つ</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="${rootPath}ja/index.html#features">特徴 <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <a href="${rootPath}ja/about/features.html" class="dropdown-item">
                            <span class="dropdown-icon">⭐</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">当社の強み</span>
                                <span class="dropdown-desc">選ばれる理由</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/tools/index.html" class="dropdown-item">
                            <span class="dropdown-icon">🧽</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">使用道具</span>
                                <span class="dropdown-desc">高品質な日本製品</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/about/cleaning-process.html" class="dropdown-item">
                            <span class="dropdown-icon">📋</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">クリーニングプロセス</span>
                                <span class="dropdown-desc">ご利用の流れ</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/about/FAQ.html" class="dropdown-item">
                            <span class="dropdown-icon">❓</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">FAQ</span>
                                <span class="dropdown-desc">よくある質問</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li><a href="${rootPath}ja/index.html#process">ご利用の流れ</a></li>
                <li class="dropdown">
                    <a href="${rootPath}ja/index.html#service-area">対応エリア <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <a href="${rootPath}ja/service-areas/mosman.html" class="dropdown-item">
                            <span class="dropdown-icon">📍</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Mosman</span>
                                <span class="dropdown-desc">高級住宅街エリア</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/service-areas/palm-beach.html" class="dropdown-item">
                            <span class="dropdown-icon">🏖️</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Palm Beach</span>
                                <span class="dropdown-desc">美しいビーチエリア</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/service-areas/bondi-beach.html" class="dropdown-item">
                            <span class="dropdown-icon">🌊</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Bondi Beach</span>
                                <span class="dropdown-desc">世界的に有名なビーチ</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/service-areas/manly.html" class="dropdown-item">
                            <span class="dropdown-icon">⛵</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Manly</span>
                                <span class="dropdown-desc">人気の観光エリア</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li><a href="${rootPath}ja/index.html#gallery">施工例</a></li>
                <li class="dropdown">
                    <a href="#" class="no-link">その他 <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <a href="${rootPath}ja/blog/index.html" class="dropdown-item">
                            <span class="dropdown-icon">📝</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">ブログ</span>
                                <span class="dropdown-desc">お掃除のコツと情報</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/index.html#recruit" class="dropdown-item">
                            <span class="dropdown-icon">💼</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">採用情報</span>
                                <span class="dropdown-desc">一緒に働きませんか</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/index.html#testimonials" class="dropdown-item">
                            <span class="dropdown-icon">💬</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">お客様の声</span>
                                <span class="dropdown-desc">実際の評価と感想</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li><a href="${rootPath}ja/index.html#contact" class="cta-link">無料見積もり</a></li>
                <li class="dropdown language-dropdown">
                    <a href="#" class="no-link">🌐 日本語 <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu language-menu">
                        <a href="${getLanguageSwitchPath('ja')}" class="dropdown-item active">
                            <span class="dropdown-icon">🇯🇵</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">日本語</span>
                            </div>
                        </a>
                        <a href="${getLanguageSwitchPath('en')}" class="dropdown-item">
                            <span class="dropdown-icon">🇦🇺</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">English</span>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
            <div class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    `;
}

function getEnglishHeader(rootPath) {
    return `
        <nav>
            <a href="${rootPath}en/index.html">
                <img src="${rootPath}logo.png" alt="Asahi Cleaning" class="logo">
            </a>
            <ul class="nav-links" id="navLinks">
                <li class="dropdown">
                    <a href="${rootPath}en/index.html#services">Services <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <a href="${rootPath}en/services/airbnb-cleaning.html" class="dropdown-item">
                            <span class="dropdown-icon">🏠</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Airbnb Cleaning</span>
                                <span class="dropdown-desc">Maximize guest satisfaction</span>
                            </div>
                        </a>
                        <a href="${rootPath}en/services/luxury-residential-cleaning.html" class="dropdown-item">
                            <span class="dropdown-icon">✨</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Luxury Residential</span>
                                <span class="dropdown-desc">Premium service for discerning clients</span>
                            </div>
                        </a>
                        <a href="${rootPath}en/services/office-cleaning.html" class="dropdown-item">
                            <span class="dropdown-icon">🏢</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Office Cleaning</span>
                                <span class="dropdown-desc">Professional workspace maintenance</span>
                            </div>
                        </a>
                        <a href="${rootPath}en/services/deep-cleaning.html" class="dropdown-item">
                            <span class="dropdown-icon">🧹</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Deep Cleaning</span>
                                <span class="dropdown-desc">Thorough top-to-bottom cleaning</span>
                            </div>
                        </a>
                        <a href="${rootPath}en/services/regular-cleaning-plan.html" class="dropdown-item">
                            <span class="dropdown-icon">🔄</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Regular Plans</span>
                                <span class="dropdown-desc">Ongoing maintenance packages</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="${rootPath}en/index.html#features">Features <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <a href="${rootPath}en/about/features.html" class="dropdown-item">
                            <span class="dropdown-icon">⭐</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Our Strengths</span>
                                <span class="dropdown-desc">Why choose us</span>
                            </div>
                        </a>
                        <a href="${rootPath}en/tools/index.html" class="dropdown-item">
                            <span class="dropdown-icon">🧽</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Tools & Products</span>
                                <span class="dropdown-desc">Premium Japanese supplies</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li><a href="${rootPath}en/index.html#process">Process</a></li>
                <li class="dropdown">
                    <a href="${rootPath}en/index.html#service-area">Service Areas <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <a href="${rootPath}en/service-areas/mosman.html" class="dropdown-item">
                            <span class="dropdown-icon">📍</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Mosman</span>
                                <span class="dropdown-desc">Luxury residential area</span>
                            </div>
                        </a>
                        <a href="${rootPath}en/service-areas/palm-beach.html" class="dropdown-item">
                            <span class="dropdown-icon">🏖️</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Palm Beach</span>
                                <span class="dropdown-desc">Beautiful coastal area</span>
                            </div>
                        </a>
                        <a href="${rootPath}en/service-areas/bondi-beach.html" class="dropdown-item">
                            <span class="dropdown-icon">🌊</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Bondi Beach</span>
                                <span class="dropdown-desc">World-famous beach</span>
                            </div>
                        </a>
                        <a href="${rootPath}en/service-areas/manly.html" class="dropdown-item">
                            <span class="dropdown-icon">⛵</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Manly</span>
                                <span class="dropdown-desc">Popular tourist destination</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li><a href="${rootPath}en/index.html#gallery">Gallery</a></li>
                <li class="dropdown">
                    <a href="#" class="no-link">More <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <a href="${rootPath}en/blog/index.html" class="dropdown-item">
                            <span class="dropdown-icon">📝</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Blog</span>
                                <span class="dropdown-desc">Cleaning tips & insights</span>
                            </div>
                        </a>
                        <a href="${rootPath}en/index.html#recruit" class="dropdown-item">
                            <span class="dropdown-icon">💼</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Careers</span>
                                <span class="dropdown-desc">Join our team</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li><a href="${rootPath}en/index.html#contact" class="cta-link">Free Quote</a></li>
                <li class="dropdown language-dropdown">
                    <a href="#" class="no-link">🌐 EN <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu language-menu">
                        <a href="${getLanguageSwitchPath('ja')}" class="dropdown-item">
                            <span class="dropdown-icon">🇯🇵</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">日本語</span>
                            </div>
                        </a>
                        <a href="${getLanguageSwitchPath('en')}" class="dropdown-item active">
                            <span class="dropdown-icon">🇦🇺</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">English</span>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
            <div class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    `;
}

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
}

// ページ読み込み時に実行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSharedHeader);
} else {
    initSharedHeader();
}
