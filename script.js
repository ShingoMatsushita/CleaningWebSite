// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
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

// ヘッダースクロールエフェクト
function initHeaderScroll() {
    const header = document.getElementById('header');
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

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');
        let isOpen = false;
        let closeTimeout;

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

// カーソル追従エフェクト
function initCursorEffect() {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    const root = document.documentElement;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        root.style.setProperty('--cursor-x', cursorX + 'px');
        root.style.setProperty('--cursor-y', cursorY + 'px');

        requestAnimationFrame(animateCursor);
    }

    animateCursor();
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

// モバイルメニュー
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

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
    const scrollAmount = 370; // アイテム幅 + gap
    
    if (direction === 'prev') {
        gallery.scrollLeft -= scrollAmount;
    } else {
        gallery.scrollLeft += scrollAmount;
    }
    
    // スクロール後に矢印の表示を更新
    setTimeout(updateGalleryArrows, 100);
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
    const scrollAmount = 320; // アイテム幅 + gap
    
    if (direction === 'prev') {
        tools.scrollLeft -= scrollAmount;
    } else {
        tools.scrollLeft += scrollAmount;
    }
    
    // スクロール後に矢印の表示を更新
    setTimeout(updateToolsArrows, 100);
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
    const scrollAmount = 370; // アイテム幅 + gap
    
    if (direction === 'prev') {
        blog.scrollLeft -= scrollAmount;
    } else {
        blog.scrollLeft += scrollAmount;
    }
    
    // スクロール後に矢印の表示を更新
    setTimeout(updateBlogArrows, 100);
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

// スクロールアニメーション - より滑らかな実装
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            // スタガー効果のための遅延を追加
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 50);
        }
    });
}

// スクロール時のパフォーマンス最適化
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(function() {
        animateOnScroll();
    });
});

window.addEventListener('load', animateOnScroll);

// ヘッダーのスクロール効果 - 最適化版
let lastScroll = 0;
const header = document.getElementById('header');
let headerTicking = false;

function updateHeader() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px) saturate(180%)';
        header.style.boxShadow = '0 8px 32px rgba(0, 128, 204, 0.12)';
        header.style.borderBottom = '1px solid rgba(0, 128, 204, 0.2)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.85)';
        header.style.backdropFilter = 'blur(20px) saturate(180%)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.08)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
    }

    lastScroll = currentScroll;
    headerTicking = false;
}

window.addEventListener('scroll', function() {
    if (!headerTicking) {
        window.requestAnimationFrame(updateHeader);
        headerTicking = true;
    }
}, { passive: true });

// スムーズスクロール
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
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

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
        submitBtn.innerHTML = currentLang === 'ja' ?
            '<span>送信中...</span>' :
            '<span>Sending...</span>';

        // フォームデータを取得
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        // 実際の送信処理はここに実装
        // 今はシミュレーションとして2秒後に成功メッセージを表示
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

            // 成功メッセージを表示
            alert(currentLang === 'ja' ?
                `お問い合わせありがとうございます、${formData.name}様。\n24時間以内にご返信させていただきます。` :
                `Thank you for your inquiry, ${formData.name}.\nWe will contact you within 24 hours.`);

            // フォームをリセット
            contactForm.reset();
        }, 2000);
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

// パフォーマンス最適化: Intersection Observer - より高度な実装
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // スタガー効果のための遅延
            setTimeout(() => {
                entry.target.classList.add('visible');
                // アニメーション完了後は監視を停止してパフォーマンス向上
                observer.unobserve(entry.target);
            }, index * 100);
        }
    });
}, observerOptions);

// 各要素にアニメーションクラスとobserverを適用
document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
    // 初期状態を設定（CSSで設定済みなので削除）
    observer.observe(el);
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
