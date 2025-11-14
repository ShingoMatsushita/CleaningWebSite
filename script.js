
// 言語切り替え機能
let currentLang = 'ja';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-ja][data-en]').forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = element.getAttribute(`data-${lang}`);
        } else {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });
    
    // 言語ボタンの更新
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // 採用情報の表示/非表示
    const recruitLink = document.querySelector('.recruit-link');
    const recruitSection = document.querySelector('.recruit');
    if (lang === 'ja') {
        recruitLink.classList.add('show');
        recruitSection.classList.add('show');
    } else {
        recruitLink.classList.remove('show');
        recruitSection.classList.remove('show');
    }
    
    // ローカルストレージに保存
    localStorage.setItem('preferred-lang', lang);
}

// ページ読み込み時に保存された言語設定を適用
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferred-lang') || 'ja';
    if (savedLang !== 'ja') {
        setLanguage(savedLang);
        document.querySelector(`.lang-btn:nth-child(${savedLang === 'en' ? '2' : '1'})`).classList.add('active');
        document.querySelector(`.lang-btn:nth-child(${savedLang === 'en' ? '1' : '2'})`).classList.remove('active');
    }
    
    // 初期状態で採用情報を表示
    if (savedLang === 'ja') {
        document.querySelector('.recruit-link').classList.add('show');
        document.querySelector('.recruit').classList.add('show');
    }
    
    // ギャラリーのスクロール位置をチェック
    updateGalleryArrows();
    updateToolsArrows();
    updateBlogArrows();
});

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

// スクロールアニメーション
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ヘッダーのスクロール効果
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 1px 10px rgba(0,0,0,0.05)';
    }
    
    lastScroll = currentScroll;
});

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

// フォーム送信のシミュレーション
const contactBtns = document.querySelectorAll('.btn-primary, .contact-btn, .cta-btn');
contactBtns.forEach(btn => {
    if (btn.getAttribute('href') === '#contact' || btn.getAttribute('href') === '#') {
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert(currentLang === 'ja' ? 
                    'お問い合わせありがとうございます。まもなく担当者よりご連絡させていただきます。' :
                    'Thank you for your inquiry. We will contact you shortly.');
            }
        });
    }
});

// パフォーマンス最適化: Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

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