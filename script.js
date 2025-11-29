// ============================================
// Header Navigation - 一元管理
// ============================================

// ルートパスまでの相対パスを計算
function getRootPath() {
    const currentPath = window.location.pathname;
    // パスの深さを計算
    // 例: /ja/Home.html → ['', 'ja', 'Home.html'] → ['ja'] → 1階層 → ../
    // 例: /ja/services/airbnb-cleaning.html → ['', 'ja', 'services', 'airbnb-cleaning.html'] → ['ja', 'services'] → 2階層 → ../../
    const segments = currentPath.split('/').filter(segment => segment && !segment.includes('.html'));
    const pathDepth = segments.length;
    // ルートパスを生成（例: 1階層下なら ../、2階層下なら ../../）
    return '../'.repeat(Math.max(0, pathDepth));
}

// 日本語ヘッダーを生成
function getJapaneseHeader(rootPath) {
    const headerHTML = `
    <!-- ヘッダー -->
    <header id="header">
        <nav>
            <a href="${rootPath}ja/Home.html#hero">
                <img src="${rootPath}img/logo.png" alt="Asahi Cleaning" class="logo">
            </a>
            <ul class="nav-links" id="navLinks">
                <li class="dropdown">
                    <a href="${rootPath}ja/Home.html#services">サービス <span class="dropdown-arrow">▼</span></a>
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
                    <a href="${rootPath}ja/service-areas/index.html">対応エリア <span class="dropdown-arrow">▼</span></a>
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
                <li class="dropdown">
                    <a href="${rootPath}ja/about/features.html">特徴 <span class="dropdown-arrow">▼</span></a>
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
                <li><a href="${rootPath}ja/Home.html#gallery">施工例</a></li>
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
                        <a href="${rootPath}ja/about/recruit.html" class="dropdown-item">
                            <span class="dropdown-icon">💼</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">採用情報</span>
                                <span class="dropdown-desc">一緒に働きませんか</span>
                            </div>
                        </a>
                        <a href="${rootPath}ja/Home.html#testimonials" class="dropdown-item">
                            <span class="dropdown-icon">💬</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">お客様の声</span>
                                <span class="dropdown-desc">実際の評価と感想</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li><a href="${rootPath}ja/contact/index.html" class="cta-link">無料見積もり</a></li>
                <li class="dropdown language-dropdown">
                    <a href="#" class="no-link">🌐 日本語 <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu language-menu">
                        <a href="${rootPath}ja/Home.html" class="dropdown-item active">
                            <span class="dropdown-icon">🇯🇵</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">日本語</span>
                            </div>
                        </a>
                        <a href="${rootPath}en/Home.html" class="dropdown-item">
                            <span class="dropdown-icon">🇦🇺</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">English</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/Home.html" class="dropdown-item">
                            <span class="dropdown-icon">🇨🇳</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">中文</span>
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
    </header>
    `;
    return headerHTML;
}

// 英語ヘッダーを生成
function getEnglishHeader(rootPath) {
    const headerHTML = `
    <!-- Header -->
    <header id="header">
        <nav>
            <a href="${rootPath}en/Home.html#hero">
                <img src="${rootPath}img/logo.png" alt="Asahi Cleaning" class="logo">
            </a>
            <ul class="nav-links" id="navLinks">
                <li><a href="${rootPath}en/Home.html#services">Services</a></li>
                <li><a href="${rootPath}en/Home.html#features">Features</a></li>
                <li><a href="${rootPath}en/Home.html#tools">Tools & Products</a></li>
                <li><a href="${rootPath}en/Home.html#service-area">Service Areas</a></li>
                <li><a href="${rootPath}en/Home.html#process">Process</a></li>
                <li><a href="${rootPath}en/Home.html#gallery">Gallery</a></li>
                <li><a href="${rootPath}en/Home.html#blog">Blog</a></li>
                <li><a href="${rootPath}en/Home.html#testimonials">Testimonials</a></li>
                <li><a href="${rootPath}en/Home.html#recruit">Careers</a></li>
                <li><a href="${rootPath}en/Home.html#contact" class="contact-btn">Contact</a></li>
                <li class="dropdown language-dropdown">
                    <a href="#" class="no-link">🌐 EN <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu language-menu">
                        <a href="${rootPath}ja/Home.html" class="dropdown-item">
                            <span class="dropdown-icon">🇯🇵</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">日本語</span>
                            </div>
                        </a>
                        <a href="${rootPath}en/Home.html" class="dropdown-item active">
                            <span class="dropdown-icon">🇦🇺</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">English</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/Home.html" class="dropdown-item">
                            <span class="dropdown-icon">🇨🇳</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">中文</span>
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
    </header>
    `;
    return headerHTML;
}

// 中国語ヘッダーを生成
function getChineseHeader(rootPath) {
    const headerHTML = `
    <!-- 页眉 -->
    <header id="header">
        <nav>
            <a href="${rootPath}zh/Home.html#hero">
                <img src="${rootPath}img/logo.png" alt="Asahi Cleaning" class="logo">
            </a>
            <ul class="nav-links" id="navLinks">
                <li class="dropdown">
                    <a href="${rootPath}zh/Home.html#services">服务 <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <a href="${rootPath}zh/services/airbnb-cleaning.html" class="dropdown-item">
                            <span class="dropdown-icon">🏠</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Airbnb清洁</span>
                                <span class="dropdown-desc">提高客人满意度的彻底清洁</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/services/luxury-residential-cleaning.html" class="dropdown-item">
                            <span class="dropdown-icon">✨</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">高端住宅清洁</span>
                                <span class="dropdown-desc">面向高端客户的优质服务</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/services/office-cleaning.html" class="dropdown-item">
                            <span class="dropdown-icon">🏢</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">办公室清洁</span>
                                <span class="dropdown-desc">维持舒适的职场环境</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/services/deep-cleaning.html" class="dropdown-item">
                            <span class="dropdown-icon">🧹</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">深度清洁</span>
                                <span class="dropdown-desc">彻底清洁每个角落</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/services/japanese-style-styling.html" class="dropdown-item">
                            <span class="dropdown-icon">🌸</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">日式空间装饰</span>
                                <span class="dropdown-desc">运用日本美学意识的空间</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/services/regular-cleaning-plan.html" class="dropdown-item">
                            <span class="dropdown-icon">🔄</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">定期清洁计划</span>
                                <span class="dropdown-desc">保持持续的清洁</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="${rootPath}zh/service-areas/index.html">服务区域 <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <a href="${rootPath}zh/service-areas/mosman.html" class="dropdown-item">
                            <span class="dropdown-icon">📍</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Mosman</span>
                                <span class="dropdown-desc">高端住宅区</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/service-areas/palm-beach.html" class="dropdown-item">
                            <span class="dropdown-icon">🏖️</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Palm Beach</span>
                                <span class="dropdown-desc">美丽的海滩区域</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/service-areas/bondi-beach.html" class="dropdown-item">
                            <span class="dropdown-icon">🌊</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Bondi Beach</span>
                                <span class="dropdown-desc">世界著名的海滩</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/service-areas/manly.html" class="dropdown-item">
                            <span class="dropdown-icon">⛵</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">Manly</span>
                                <span class="dropdown-desc">热门旅游区域</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="${rootPath}zh/about/features.html">特点 <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <a href="${rootPath}zh/about/features.html" class="dropdown-item">
                            <span class="dropdown-icon">⭐</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">我们的优势</span>
                                <span class="dropdown-desc">被选择的理由</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/tools/index.html" class="dropdown-item">
                            <span class="dropdown-icon">🧽</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">使用工具</span>
                                <span class="dropdown-desc">高品质的日本产品</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/about/cleaning-process.html" class="dropdown-item">
                            <span class="dropdown-icon">📋</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">清洁流程</span>
                                <span class="dropdown-desc">使用流程</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/about/FAQ.html" class="dropdown-item">
                            <span class="dropdown-icon">❓</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">常见问题</span>
                                <span class="dropdown-desc">常见问题</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li><a href="${rootPath}zh/Home.html#gallery">施工实绩</a></li>
                <li class="dropdown">
                    <a href="#" class="no-link">其他 <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <a href="${rootPath}zh/blog/index.html" class="dropdown-item">
                            <span class="dropdown-icon">📝</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">博客</span>
                                <span class="dropdown-desc">清洁技巧和信息</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/about/recruit.html" class="dropdown-item">
                            <span class="dropdown-icon">💼</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">招聘信息</span>
                                <span class="dropdown-desc">一起工作吧</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/Home.html#testimonials" class="dropdown-item">
                            <span class="dropdown-icon">💬</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">客户评价</span>
                                <span class="dropdown-desc">实际评价和感想</span>
                            </div>
                        </a>
                    </div>
                </li>
                <li><a href="${rootPath}zh/contact/index.html" class="cta-link">免费报价</a></li>
                <li class="dropdown language-dropdown">
                    <a href="#" class="no-link">🌐 中文 <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu language-menu">
                        <a href="${rootPath}ja/Home.html" class="dropdown-item">
                            <span class="dropdown-icon">🇯🇵</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">日本語</span>
                            </div>
                        </a>
                        <a href="${rootPath}en/Home.html" class="dropdown-item">
                            <span class="dropdown-icon">🇦🇺</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">English</span>
                            </div>
                        </a>
                        <a href="${rootPath}zh/Home.html" class="dropdown-item active">
                            <span class="dropdown-icon">🇨🇳</span>
                            <div class="dropdown-content">
                                <span class="dropdown-title">中文</span>
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
    </header>
    `;
    return headerHTML;
}

// 共有ヘッダーを初期化
function initSharedHeader() {
    const headerElement = document.getElementById('header');
    if (!headerElement) return;
    
    // 既に内容がある場合はスキップ（手動で記述されている場合）
    const currentContent = headerElement.innerHTML.trim();
    if (currentContent && 
        !currentContent.includes('<!-- ヘッダー（自動生成） -->') && 
        !currentContent.includes('<!-- ヘッダー -->') && 
        !currentContent.includes('<!-- Header -->')) {
        // 空でない場合は既存のheaderを使用
        return;
    }
    
    // 現在のページのパスから言語を判定
    const currentPath = window.location.pathname;
    let headerHTML;
    const rootPath = getRootPath();
    
    if (currentPath.includes('/zh/')) {
        // 中国語ページ
        headerHTML = getChineseHeader(rootPath);
    } else if (currentPath.includes('/ja/')) {
        // 日本語ページ
        headerHTML = getJapaneseHeader(rootPath);
    } else if (currentPath.includes('/en/')) {
        // 英語ページ
        headerHTML = getEnglishHeader(rootPath);
    } else {
        // デフォルトは日本語
        headerHTML = getJapaneseHeader(rootPath);
    }
    
    // ヘッダーを挿入
    headerElement.innerHTML = headerHTML;
}

// ============================================
// ページ読み込み時の初期化 - 最適化版
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // まずヘッダーを生成（他の初期化より先に実行）
    initSharedHeader();
    
    // requestAnimationFrameを使用してDOM更新を待つ（setTimeoutの代わり）
    requestAnimationFrame(() => {
        // モバイルメニューの初期化（header生成後）
        initMobileMenu();
        
        // スムーズスクロールの初期化
        initSmoothScroll();
        
        // ギャラリーのスクロール位置をチェック
        updateGalleryArrows();
        updateToolsArrows();
        updateBlogArrows();

        // カーソルエフェクトの初期化
        initCursorEffect();

        // パララックス効果の初期化
        initParallax();

        // ヘッダースクロールエフェクトの初期化
        initHeaderScroll();

        // ドロップダウンメニューの初期化
        initDropdownMenus();

        // サービスチップの初期化
        initServiceChips();

        // 言語切替の初期化
        initLanguageSwitchers();
    });
});

// ヘッダースクロールエフェクト - 統合最適化版
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    
    let ticking = false;

    function updateHeader() {
        const scrollY = window.pageYOffset;

        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        ticking = false;
    }

    // 単一のスクロールイベントリスナーで統合
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
    const navLinks = document.getElementById('navLinks');

    // モバイルメニューが開いているか、画面幅が768px以下かチェック
    function isMobileMenuMode() {
        return window.innerWidth <= 768 || (navLinks && navLinks.classList.contains('active'));
    }

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');
        let isOpen = false;
        let closeTimeout;

        // クリック/タップでドロップダウンを開閉（すべてのデバイスで動作）
        if (link) {
            link.addEventListener('click', function(e) {
                // ドロップダウンがある場合のみ処理
                if (menu) {
                    // モバイルメニューモードの場合は、クリックで開閉
                    if (isMobileMenuMode()) {
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
                    } else if ('ontouchstart' in window) {
                        // タッチデバイスでモバイルメニューが閉じている場合
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
                }
            });
        }

        // デスクトップでのマウス対応（モバイルメニューが開いている時は無効化）
        dropdown.addEventListener('mouseenter', function() {
            // モバイルメニューモードの場合はマウスホバーを無効化
            if (isMobileMenuMode()) {
                return;
            }
            clearTimeout(closeTimeout);
            
            // 他のドロップダウンを即座に閉じる（UX向上）
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
            
            dropdown.classList.add('active');
        });

        dropdown.addEventListener('mouseleave', function() {
            // モバイルメニューモードの場合はマウスホバーを無効化
            if (isMobileMenuMode()) {
                return;
            }
            closeTimeout = setTimeout(() => {
                dropdown.classList.remove('active');
            }, 1000);
        });
    });

    // 外側クリックで閉じる（モバイルメニューが開いている時のみ）
    document.addEventListener('click', function(e) {
        if (isMobileMenuMode() && !e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

// サービスチップ（ショートカット）機能
function initServiceChips() {
    const groups = document.querySelectorAll('.choice-chips');

    groups.forEach(group => {
        const targetId = group.dataset.target;
        const target = targetId ? document.getElementById(targetId) : null;
        const buttons = Array.from(group.querySelectorAll('button[data-value]'));

        if (!buttons.length) return;

        const setActive = (value) => {
            buttons.forEach(btn => {
                btn.classList.toggle('active', value && btn.dataset.value === value);
            });
        };

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.dataset.value;
                if (target) {
                    target.value = value;
                    target.dispatchEvent(new Event('change', { bubbles: true }));
                }
                setActive(value);
            });
        });

        if (target) {
            target.addEventListener('change', () => setActive(target.value));
            setActive(target.value);
        }
    });
}

// 言語切替 (グローブ) メニュー
function initLanguageSwitchers() {
    const switchers = document.querySelectorAll('.language-switcher');

    if (!switchers.length) return;

    switchers.forEach(switcher => {
        const toggle = switcher.querySelector('.lang-toggle');
        if (!toggle) return;

        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = switcher.classList.toggle('open');
            toggle.setAttribute('aria-expanded', isOpen);
        });
    });

    document.addEventListener('click', function(e) {
        switchers.forEach(switcher => {
            if (!switcher.contains(e.target)) {
                switcher.classList.remove('open');
                const toggle = switcher.querySelector('.lang-toggle');
                if (toggle) {
                    toggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
}

// カーソル追従エフェクト - 最適化版（モバイルでは無効化）
function initCursorEffect() {
    // モバイルデバイスでは無効化
    if (window.innerWidth < 768 || 'ontouchstart' in window) {
        return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    const root = document.documentElement;
    let animationFrameId = null;
    let isActive = false;

    const handleMouseMove = function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!isActive) {
            isActive = true;
            animateCursor();
        }
    };

    function animateCursor() {
        if (!isActive) {
            animationFrameId = null;
            return;
        }

        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        root.style.setProperty('--cursor-x', cursorX + 'px');
        root.style.setProperty('--cursor-y', cursorY + 'px');

        animationFrameId = requestAnimationFrame(animateCursor);
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // マウスが離れたらアニメーションを停止
    document.addEventListener('mouseleave', function() {
        isActive = false;
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    });
}

// パララックス効果 - 最適化版
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    let ticking = false;
    let lastScrollY = 0;

    function updateParallax() {
        const scrolled = lastScrollY;
        const parallax = scrolled * 0.3; // 効果を軽減

        if (scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${parallax}px)`;
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        lastScrollY = window.pageYOffset;

        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true }); // passive オプションでパフォーマンス向上
}

// モバイルメニュー（header生成後に初期化）
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        // 既存のイベントリスナーを削除してから追加（重複防止）
        const newMenuToggle = menuToggle.cloneNode(true);
        menuToggle.parentNode.replaceChild(newMenuToggle, menuToggle);
        
        newMenuToggle.addEventListener('click', function() {
            const isActive = navLinks.classList.toggle('active');
            newMenuToggle.classList.toggle('active');
            
            // メニューが開いているときはbodyのスクロールを無効化
            if (isActive) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // メニューリンクをクリックしたら閉じる（ドロップダウンの親リンクは除く）
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                // ドロップダウンの親リンクの場合は、メニューを閉じない
                const dropdown = link.closest('.dropdown');
                if (dropdown && dropdown.querySelector('.dropdown-menu')) {
                    // 親リンクのクリックは、ドロップダウンの開閉処理で処理される
                    // ここでは何もしない
                    return;
                }
                
                // ドロップダウンメニュー内のリンク（子リンク）をクリックした場合は閉じる
                const isDropdownItem = link.closest('.dropdown-menu');
                if (isDropdownItem) {
                    navLinks.classList.remove('active');
                    newMenuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                } else if (!dropdown) {
                    // 通常のリンク（ドロップダウンではない）をクリックした場合は閉じる
                    navLinks.classList.remove('active');
                    newMenuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
        
        // メニュー外側をクリックしたら閉じる
        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !newMenuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                newMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ギャラリーデータ
const galleryData = [
    {
        title: '高級マンション リビング',
        titleEn: 'Luxury Apartment Living Room',
        description: '広々としたリビングルームの清掃を行いました。フローリングの艶出しから、家具の細部まで丁寧に清掃。日本製のワックスを使用し、長持ちする美しい仕上がりを実現しました。お客様からは「新築のような輝きが戻った」とのお声をいただきました。',
        descriptionEn: 'Complete cleaning of spacious living room. From floor polishing to detailed furniture care using Japanese wax for long-lasting beautiful finish. Customer praised the "like-new shine".',
        time: '3-4時間',
        timeEn: '3-4 hours',
        tools: '日本製ワックス、マイクロファイバー',
        toolsEn: 'Japanese wax, Microfiber',
        price: '$250-350',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053'
    },
    {
        title: 'キッチン ディープクリーニング',
        titleEn: 'Kitchen Deep Cleaning',
        description: 'キッチン全体の徹底清掃を実施。レンジフード、コンロ、シンクはもちろん、冷蔵庫の裏や食器棚の中まで完璧に清掃しました。頑固な油汚れも日本の技術で完全に除去し、衛生的な調理環境を提供します。',
        descriptionEn: 'Complete kitchen deep cleaning including range hood, stove, sink, and behind appliances. Stubborn grease removed using Japanese techniques for hygienic cooking environment.',
        time: '2-3時間',
        timeEn: '2-3 hours',
        tools: '業務用洗剤、スチームクリーナー',
        toolsEn: 'Commercial cleaners, Steam cleaner',
        price: '$180-250',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068'
    },
    {
        title: 'バスルーム 徹底清掃',
        titleEn: 'Bathroom Deep Clean',
        description: 'カビや水垢の完全除去を実現。鏡や蛇口はピカピカに磨き上げ、タイルの目地まで徹底的に清掃しました。防カビコーティングも施工し、清潔な状態を長期間維持できます。',
        descriptionEn: 'Complete removal of mold and limescale. Mirrors and faucets polished to shine, tile grout thoroughly cleaned. Anti-mold coating applied for long-lasting cleanliness.',
        time: '2-3時間',
        timeEn: '2-3 hours',
        tools: '防カビ剤、研磨パッド',
        toolsEn: 'Anti-mold agent, Scrub pads',
        price: '$150-200',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070'
    },
    {
        title: 'Airbnb ゲストルーム',
        titleEn: 'Airbnb Guest Room',
        description: 'ゲストチェックイン前の完璧な準備。リネン交換、アメニティ補充、全体清掃を行い、5つ星レビューをサポート。細部まで行き届いた清掃で、ゲストの満足度向上に貢献します。',
        descriptionEn: 'Perfect preparation before guest check-in. Linen change, amenity restocking, and complete cleaning for 5-star reviews. Detailed cleaning contributes to guest satisfaction.',
        time: '1.5-2時間',
        timeEn: '1.5-2 hours',
        tools: 'プロ用掃除機、除菌スプレー',
        toolsEn: 'Professional vacuum, Sanitizer',
        price: '$120-180',
        image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2074'
    },
    {
        title: 'オフィススペース',
        titleEn: 'Office Space',
        description: '快適な職場環境の創造。デスク周り、会議室、休憩スペースまで丁寧に清掃。エアコンフィルターの清掃も行い、清潔で健康的なオフィス環境を提供します。',
        descriptionEn: 'Creating comfortable workplace environment. Careful cleaning of desks, meeting rooms, and break areas. AC filter cleaning for clean and healthy office environment.',
        time: '3-5時間',
        timeEn: '3-5 hours',
        tools: 'HEPA掃除機、除菌クロス',
        toolsEn: 'HEPA vacuum, Disinfectant wipes',
        price: '$300-500',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069'
    },
    {
        title: '和室・畳の手入れ',
        titleEn: 'Japanese Room & Tatami Care',
        description: '日本の伝統的な清掃技術で畳を丁寧にケア。専用の道具を使用し、畳の目に沿って優しく清掃。障子や襖の手入れも行い、和の空間を美しく保ちます。',
        descriptionEn: 'Traditional Japanese cleaning techniques for tatami care. Gentle cleaning along tatami grain using specialized tools. Shoji and fusuma maintenance for beautiful Japanese space.',
        time: '2-3時間',
        timeEn: '2-3 hours',
        tools: '畳専用ブラシ、和室用洗剤',
        toolsEn: 'Tatami brush, Japanese cleaners',
        price: '$200-280',
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069'
    },
    {
        title: '寝室クリーニング',
        titleEn: 'Bedroom Cleaning',
        description: 'アレルゲン除去と快適な睡眠空間の実現。マットレスのダニ除去、カーテンの洗浄、エアコンフィルター清掃まで、健康的な睡眠環境を整えます。',
        descriptionEn: 'Allergen removal for comfortable sleeping space. Mattress mite removal, curtain cleaning, and AC filter cleaning for healthy sleep environment.',
        time: '2-3時間',
        timeEn: '2-3 hours',
        tools: 'ダニ除去機、HEPA掃除機',
        toolsEn: 'Mite remover, HEPA vacuum',
        price: '$180-250',
        image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?q=80&w=2070'
    },
    {
        title: 'ランドリールーム',
        titleEn: 'Laundry Room',
        description: '洗濯機・乾燥機の内部清掃から、収納棚の整理まで。清潔で機能的な洗濯空間に変身させます。洗濯機の除菌・消臭処理も含まれています。',
        descriptionEn: 'From washer/dryer internal cleaning to storage organization. Transform into clean and functional laundry space. Includes washer sanitization and deodorization.',
        time: '1.5-2時間',
        timeEn: '1.5-2 hours',
        tools: '洗濯機クリーナー、整理用品',
        toolsEn: 'Washer cleaner, Organizers',
        price: '$100-150',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070'
    }
];

// ギャラリースクロール関数
function scrollGallery(direction) {
    const gallery = document.getElementById('galleryGrid');
    if (!gallery) return;
    
    const scrollAmount = 370; // アイテム幅 + gap
    
    if (direction === 'prev') {
        gallery.scrollLeft -= scrollAmount;
    } else {
        gallery.scrollLeft += scrollAmount;
    }
    
    // スクロール後に矢印の表示を更新（requestAnimationFrameで最適化）
    requestAnimationFrame(updateGalleryArrows);
}

// ギャラリー矢印の表示/非表示を制御
function updateGalleryArrows() {
    const gallery = document.getElementById('galleryGrid');
    const prevBtn = document.querySelector('.gallery-arrow.prev');
    const nextBtn = document.querySelector('.gallery-arrow.next');
    
    const scrollLeft = gallery.scrollLeft;
    const scrollWidth = gallery.scrollWidth;
    const clientWidth = gallery.clientWidth;
    
    // 左端にいる場合は左矢印を非表示
    if (scrollLeft <= 10) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
    
    // 右端にいる場合は右矢印を非表示
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

// 使用道具のスクロール機能
function scrollTools(direction) {
    const tools = document.getElementById('toolsGrid');
    if (!tools) return;
    
    const scrollAmount = 320; // アイテム幅 + gap
    
    if (direction === 'prev') {
        tools.scrollLeft -= scrollAmount;
    } else {
        tools.scrollLeft += scrollAmount;
    }
    
    // スクロール後に矢印の表示を更新（requestAnimationFrameで最適化）
    requestAnimationFrame(updateToolsArrows);
}

// 使用道具矢印の表示/非表示を制御
function updateToolsArrows() {
    const tools = document.getElementById('toolsGrid');
    if (!tools) return;
    
    const prevBtn = document.querySelector('.tools-arrow.prev');
    const nextBtn = document.querySelector('.tools-arrow.next');
    if (!prevBtn || !nextBtn) return;
    
    const scrollLeft = tools.scrollLeft;
    const scrollWidth = tools.scrollWidth;
    const clientWidth = tools.clientWidth;
    
    // 左端にいる場合は左矢印を非表示
    if (scrollLeft <= 10) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
    
    // 右端にいる場合は右矢印を非表示
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

// ブログのスクロール機能
function scrollBlog(direction) {
    const blog = document.getElementById('blogGrid');
    if (!blog) return;
    
    const scrollAmount = 370; // アイテム幅 + gap
    
    if (direction === 'prev') {
        blog.scrollLeft -= scrollAmount;
    } else {
        blog.scrollLeft += scrollAmount;
    }
    
    // スクロール後に矢印の表示を更新（requestAnimationFrameで最適化）
    requestAnimationFrame(updateBlogArrows);
}

// ブログ矢印の表示/非表示を制御
function updateBlogArrows() {
    const blog = document.getElementById('blogGrid');
    if (!blog) return;
    
    const prevBtn = document.querySelector('.blog-arrow.prev');
    const nextBtn = document.querySelector('.blog-arrow.next');
    if (!prevBtn || !nextBtn) return;
    
    const scrollLeft = blog.scrollLeft;
    const scrollWidth = blog.scrollWidth;
    const clientWidth = blog.clientWidth;
    
    // 左端にいる場合は左矢印を非表示
    if (scrollLeft <= 10) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
    
    // 右端にいる場合は右矢印を非表示
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

// ギャラリーのスクロールイベント監視
const galleryGridEl = document.getElementById('galleryGrid');
if (galleryGridEl) {
    galleryGridEl.addEventListener('scroll', updateGalleryArrows);
}

// 使用道具のスクロールイベント監視
const toolsGrid = document.getElementById('toolsGrid');
if (toolsGrid) {
    toolsGrid.addEventListener('scroll', updateToolsArrows);
}

// ブログのスクロールイベント監視
const blogGrid = document.getElementById('blogGrid');
if (blogGrid) {
    blogGrid.addEventListener('scroll', updateBlogArrows);
}

// モーダル開閉関数
function openModal(index) {
    const modal = document.getElementById('galleryModal');
    const data = galleryData[index];

    // HTML lang属性から現在の言語を検出
    const currentLang = document.documentElement.lang || 'ja';

    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalTitle').textContent = currentLang === 'ja' ? data.title : data.titleEn;
    document.getElementById('modalDescription').textContent = currentLang === 'ja' ? data.description : data.descriptionEn;
    document.getElementById('modalTime').textContent = currentLang === 'ja' ? data.time : data.timeEn;
    document.getElementById('modalTools').textContent = currentLang === 'ja' ? data.tools : data.toolsEn;
    document.getElementById('modalPrice').textContent = data.price;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// モーダル外側クリックで閉じる
document.getElementById('galleryModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// ESCキーでモーダルを閉じる
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// スクロールアニメーション - Intersection Observerで統合（削除：重複を避けるため）

// ヘッダーのスクロール効果 - 統合版（initHeaderScrollと統合）

// スムーズスクロール
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // モバイルメニューを閉じる
                const navLinks = document.getElementById('navLinks');
                const menuToggle = document.getElementById('menuToggle');
                if (navLinks) navLinks.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            }
        });
    });
}

// ============================================
// EmailJS設定 - フォーム送信機能
// ============================================
//
// EmailJSの設定手順:
// 1. https://www.emailjs.com/ でアカウントを作成（無料プランあり）
// 2. Email Serviceを追加（Gmail、Outlook等）
// 3. Email Templateを作成
// 4. 以下の値を取得して設定:
//    - YOUR_PUBLIC_KEY: Account > General > Public Key
//    - YOUR_SERVICE_ID: Email Services > Service ID
//    - YOUR_TEMPLATE_ID: Email Templates > Template ID
//
const EMAILJS_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY',      // ここに公開鍵を入力
    serviceId: 'YOUR_SERVICE_ID',       // ここにサービスIDを入力
    templateId: 'YOUR_TEMPLATE_ID'      // ここにテンプレートIDを入力
};

// フォーム送信処理
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const currentLang = document.documentElement.lang || 'ja';
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        // ボタンを送信中の状態に変更
        submitBtn.disabled = true;
        const sendingText = currentLang === 'ja' ? '送信中...' :
                           currentLang === 'zh' ? '发送中...' : 'Sending...';
        submitBtn.innerHTML = `<span>${sendingText}</span>`;

        // フォームデータを取得
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value || 'Not provided',
            service: document.getElementById('service').value,
            message: document.getElementById('message').value,
            language: currentLang
        };

        // EmailJSで送信（設定済みの場合）
        if (typeof emailjs !== 'undefined' &&
            EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {

            emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                formData
            ).then(function(response) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;

                // 成功メッセージ
                const successMsg = currentLang === 'ja' ?
                    `お問い合わせありがとうございます、${formData.name}様。\n24時間以内にご返信させていただきます。` :
                    currentLang === 'zh' ?
                    `感谢您的咨询，${formData.name}。\n我们将在24小时内回复您。` :
                    `Thank you for your inquiry, ${formData.name}.\nWe will contact you within 24 hours.`;

                alert(successMsg);
                contactForm.reset();

            }).catch(function(error) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;

                // エラーメッセージ
                const errorMsg = currentLang === 'ja' ?
                    '送信に失敗しました。お手数ですが、お電話またはメールで直接ご連絡ください。' :
                    currentLang === 'zh' ?
                    '发送失败。请通过电话或电子邮件直接联系我们。' :
                    'Failed to send. Please contact us directly by phone or email.';

                alert(errorMsg);
                console.error('EmailJS Error:', error);
            });

        } else {
            // EmailJSが未設定の場合はシミュレーション
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;

                const msg = currentLang === 'ja' ?
                    `お問い合わせありがとうございます、${formData.name}様。\n※現在テストモードです。メール送信を有効化するにはEmailJSを設定してください。` :
                    currentLang === 'zh' ?
                    `感谢您的咨询，${formData.name}。\n※目前为测试模式。要启用电子邮件发送，请配置EmailJS。` :
                    `Thank you for your inquiry, ${formData.name}.\n※Currently in test mode. Please configure EmailJS to enable email sending.`;

                alert(msg);
                contactForm.reset();
            }, 1000);
        }
    });
}

// フォーム送信のシミュレーション（既存のボタン用）
const contactBtns = document.querySelectorAll('.btn-primary, .contact-btn, .cta-btn');
contactBtns.forEach(btn => {
    if (btn.getAttribute('href') === '#contact' || btn.getAttribute('href') === '#') {
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                const currentLang = document.documentElement.lang || 'ja';
                alert(currentLang === 'ja' ?
                    'お問い合わせありがとうございます。まもなく担当者よりご連絡させていただきます。' :
                    'Thank you for your inquiry. We will contact you shortly.');
            }
        });
    }
});

// パフォーマンス最適化: Intersection Observer - 単一インスタンス化
let scrollObserver = null;

function initScrollObserver() {
    // 既に作成されている場合は再利用
    if (scrollObserver) {
        return scrollObserver;
    }

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    scrollObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // アニメーション完了後は監視を停止してパフォーマンス向上
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    return scrollObserver;
}

// DOMContentLoaded時に初期化
document.addEventListener('DOMContentLoaded', function() {
    const observer = initScrollObserver();
    // 各要素にアニメーションクラスとobserverを適用
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });
});

// カードにホバー時の軽量な3D効果を追加（パフォーマンス最適化版）
function add3DEffect() {
    // モバイルデバイスでは3D効果をスキップ
    if (window.innerWidth < 768) return;

    const cards = document.querySelectorAll('.service-card, .area-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            if (!this.matches(':hover')) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20; // 効果を半減
            const rotateY = (centerX - x) / 20; // 効果を半減

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });
}

// ページ読み込み後に3D効果を適用
setTimeout(add3DEffect, 1000);

// タッチスワイプ対応
let touchStartX = 0;
let touchEndX = 0;
const galleryGrid = document.getElementById('galleryGrid');

if (galleryGrid) {
    galleryGrid.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    galleryGrid.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            scrollGallery('next');
        }
        if (touchEndX > touchStartX + 50) {
            scrollGallery('prev');
        }
    }
}

// ============================================
// モバイルメニュー: ドロップダウン展開機能
// ============================================
function initMobileDropdowns() {
    // モバイルのみで動作
    if (window.innerWidth > 768) return;

    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');

        if (!link || !menu) return;

        link.addEventListener('click', function(e) {
            // モバイルメニューが開いている場合のみ処理
            const navLinks = document.getElementById('navLinks');
            if (!navLinks || !navLinks.classList.contains('active')) return;

            e.preventDefault();
            e.stopPropagation();

            // 他のドロップダウンを閉じる
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('mobile-open');
                }
            });

            // このドロップダウンをトグル
            dropdown.classList.toggle('mobile-open');
        });
    });

    // ドロップダウン内のリンクをクリックしたら、メニューを閉じる
    document.addEventListener('click', function(e) {
        if (e.target.closest('.dropdown-item')) {
            // すべてのドロップダウンを閉じる
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('mobile-open');
            });

            // メインメニューも閉じる
            const navLinks = document.getElementById('navLinks');
            const menuToggle = document.getElementById('menuToggle');
            if (navLinks) navLinks.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ページ読み込み時に初期化
window.addEventListener('load', function() {
    initMobileDropdowns();
});
