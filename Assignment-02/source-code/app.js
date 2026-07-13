// ============================================
// COURT VIGILANTE - Basketball Shoe Store
// ============================================

// ---- PRODUCT DATA ----
const products = [
    // Nike & Jordan
    {
        id: 1, name: "Air Jordan 40", brand: "nike", brandLabel: "JORDAN",
        price: 195, originalPrice: null, badge: "new",
        desc: "The next evolution of MJ's legacy. Flight reimagined with reactive cushioning and a carbon fiber shank plate.",
        image: "images/air-jordan-40.png",
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13]
    },
    {
        id: 2, name: "Jordan Luka 3", brand: "nike", brandLabel: "JORDAN",
        price: 140, originalPrice: null, badge: "hot",
        desc: "Engineered for Luka's stepback wizardry. Multi-directional traction meets lightweight lockdown.",
        image: "images/jordan-luka-3.png",
        sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13]
    },
    {
        id: 3, name: "Nike LeBron 23", brand: "nike", brandLabel: "NIKE",
        price: 200, originalPrice: null, badge: "new",
        desc: "Built for the King's power game. Max Air unit with Zoom Air forefoot for explosive drives.",
        image: "images/nike-lebron-23.png",
        sizes: [7, 8, 9, 9.5, 10, 10.5, 11, 12, 13, 14]
    },
    {
        id: 4, name: "Nike Sabrina 3", brand: "nike", brandLabel: "NIKE",
        price: 130, originalPrice: null, badge: null,
        desc: "Speed-tuned for Sabrina Ionescu's game. Lightweight mesh with React foam for quick cuts.",
        image: "images/nike-sabrina-3.png",
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11]
    },
    {
        id: 5, name: "Nike Ja 3", brand: "nike", brandLabel: "NIKE",
        price: 125, originalPrice: 140, badge: "sale",
        desc: "Designed for Ja Morant's explosive verticality. Ultra-responsive cushioning for high-flyers.",
        image: "images/nike-ja-3.png",
        sizes: [7, 7.5, 8, 8.5, 9, 10, 10.5, 11, 12]
    },
    {
        id: 6, name: "Nike KD 18", brand: "nike", brandLabel: "NIKE",
        price: 160, originalPrice: null, badge: "new",
        desc: "Kevin Durant's precision tool. Full-length Zoom Strobel for court feel and responsive energy.",
        image: "images/nike-kd-18.png",
        sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13, 14]
    },
    {
        id: 7, name: "Nike Book 2", brand: "nike", brandLabel: "NIKE",
        price: 135, originalPrice: null, badge: "hot",
        desc: "Devin Booker's silky smooth ride. Cushlon foam with herringbone traction for midrange mastery.",
        image: "images/nike-book-2.png",
        sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12]
    },
    {
        id: 8, name: "Nike GT Hustle 3", brand: "nike", brandLabel: "NIKE",
        price: 190, originalPrice: null, badge: null,
        desc: "Elite-tier performance. React foam and Zoom Air stacked for all-position dominance.",
        image: "images/nike-gt-hustle-3.png",
        sizes: [7, 8, 9, 9.5, 10, 10.5, 11, 12, 13]
    },

    // Adidas
    {
        id: 9, name: "D.O.N. Issue 7", brand: "adidas", brandLabel: "ADIDAS",
        price: 120, originalPrice: null, badge: null,
        desc: "Donovan Mitchell's all-around weapon. Lightstrike cushioning with web-like traction pattern.",
        image: "images/don-issue-7.png",
        sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12]
    },
    {
        id: 10, name: "Harden Vol. 10", brand: "adidas", brandLabel: "ADIDAS",
        price: 160, originalPrice: null, badge: "new",
        desc: "James Harden's stepback throne. Full-length Boost with lockdown lacing for euro-step kings.",
        image: "images/harden-vol-10.png",
        sizes: [7, 8, 9, 9.5, 10, 10.5, 11, 12, 13]
    },
    {
        id: 11, name: "AE 2", brand: "adidas", brandLabel: "ADIDAS",
        price: 120, originalPrice: 140, badge: "sale",
        desc: "Anthony Edwards' explosive signature. Bounce Pro cushioning for above-the-rim attacks.",
        image: "images/ae-2.png",
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 11, 12]
    },
    {
        id: 12, name: "Dame 9", brand: "adidas", brandLabel: "ADIDAS",
        price: 125, originalPrice: null, badge: null,
        desc: "Damian Lillard's clutch-time weapon. Lightstrike midsole for logo-range shooting comfort.",
        image: "images/dame-9.png",
        sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13]
    },

    // Li-Ning
    {
        id: 13, name: "Way of Wade 12", brand: "lining", brandLabel: "LI-NING",
        price: 230, originalPrice: null, badge: "new",
        desc: "Dwyane Wade's premium legacy line. Boom cushion technology with carbon fiber plate.",
        image: "images/wow-12.png",
        sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12]
    },
    {
        id: 14, name: "Way of Wade All City 13", brand: "lining", brandLabel: "LI-NING",
        price: 150, originalPrice: null, badge: null,
        desc: "Wade's versatile outdoor-ready model. Durable rubber outsole with cloud-like cushioning.",
        image: "images/wow-ac-13.png",
        sizes: [7, 8, 9, 9.5, 10, 10.5, 11, 12]
    },
    {
        id: 15, name: "Wade 808 5 Ultra", brand: "lining", brandLabel: "LI-NING",
        price: 170, originalPrice: null, badge: "hot",
        desc: "The ultimate lifestyle-meets-performance Wade. Ultra-light construction with premium materials.",
        image: "images/wade-808-5.png",
        sizes: [7, 8, 8.5, 9, 9.5, 10, 11, 12]
    },
    {
        id: 16, name: "Wade DLo 1", brand: "lining", brandLabel: "LI-NING",
        price: 140, originalPrice: null, badge: "new",
        desc: "D'Angelo Russell's debut signature. Light Foam cushioning for shifty guard play.",
        image: "images/wade-dlo-1.png",
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]
    },

    // Under Armour
    {
        id: 17, name: "Curry 12", brand: "underarmour", brandLabel: "UNDER ARMOUR",
        price: 170, originalPrice: null, badge: "new",
        desc: "Steph Curry's latest masterpiece. UA Flow technology for court feel and gravity-defying movement.",
        image: "images/curry-12.png",
        sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13]
    },
    {
        id: 18, name: "Curry Series 7", brand: "underarmour", brandLabel: "UNDER ARMOUR",
        price: 100, originalPrice: 120, badge: "sale",
        desc: "The team model from Curry Brand. Accessible performance with UA HOVR cushioning.",
        image: "images/curry-series-7.png",
        sizes: [7, 8, 9, 9.5, 10, 10.5, 11, 12]
    },
    {
        id: 19, name: "Curry Fox 1", brand: "underarmour", brandLabel: "UNDER ARMOUR",
        price: 130, originalPrice: null, badge: null,
        desc: "De'Aaron Fox's speed machine under Curry Brand. Built for the fastest guard in the league.",
        image: "images/curry-fox-1.png",
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12]
    },

    // Puma
    {
        id: 20, name: "MB.05", brand: "puma", brandLabel: "PUMA",
        price: 135, originalPrice: null, badge: "new",
        desc: "LaMelo Ball's bold statement shoe. NITRO foam with alien-inspired design language.",
        image: "images/mb-05.png",
        sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13]
    },
    {
        id: 21, name: "All-Pro NITRO", brand: "puma", brandLabel: "PUMA",
        price: 140, originalPrice: null, badge: null,
        desc: "Puma's elite team model. Full-length NITRO foam with ProFoam+ heel for versatile play.",
        image: "images/all-pro-nitro.png",
        sizes: [7, 8, 9, 9.5, 10, 10.5, 11, 12]
    },
    {
        id: 22, name: "Hali 1", brand: "puma", brandLabel: "PUMA",
        price: 110, originalPrice: null, badge: null,
        desc: "Tyrese Haliburton's inaugural signature. Lightweight construction for cerebral point guards.",
        image: "images/hali-1.png",
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 11, 12]
    },
    {
        id: 23, name: "Scoot Zero 2", brand: "puma", brandLabel: "PUMA",
        price: 125, originalPrice: null, badge: "hot",
        desc: "Scoot Henderson's next chapter. NITRO Elite foam for explosive first steps.",
        image: "images/scoot-zero-2.png",
        sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12]
    },

    // Anta
    {
        id: 24, name: "KAI 3", brand: "anta", brandLabel: "ANTA",
        price: 155, originalPrice: null, badge: "new",
        desc: "Kyrie Irving's Anta era begins. Nitrogen Speed tech for the most unpredictable handles.",
        image: "images/kai-3.png",
        sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12]
    },
    {
        id: 25, name: "GH 4", brand: "anta", brandLabel: "ANTA",
        price: 130, originalPrice: null, badge: null,
        desc: "Gordon Hayward's versatile performer. A-FlashFoam midsole for all-around wing play.",
        image: "images/gh-4.png",
        sizes: [7, 8, 9, 9.5, 10, 10.5, 11, 12, 13]
    }
];

// ---- STATE ----
let cart = JSON.parse(localStorage.getItem('cv_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('cv_wishlist')) || [];
let currentBrand = 'all';
let currentView = 'grid';
let currentSort = 'featured';
let searchQuery = '';

// ---- DOM ELEMENTS ----
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderProducts();
    updateCart();
    initEventListeners();
    animateStats();

    // Hide preloader
    setTimeout(() => {
        $('#preloader').classList.add('hidden');
    }, 1500);
});

// ---- PARTICLES ----
function createParticles() {
    const container = $('#particles-bg');
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.width = particle.style.height = (Math.random() * 3 + 1) + 'px';
        const colors = ['var(--primary)', 'var(--accent)', 'var(--neon-blue)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(particle);
    }
}

// ---- STAT COUNTER ----
function animateStats() {
    $$('.stat-number').forEach(stat => {
        const target = parseInt(stat.dataset.count);
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// ---- EVENT LISTENERS ----
function initEventListeners() {
    // Navbar scroll
    window.addEventListener('scroll', () => {
        const nav = $('#mainNav');
        nav.classList.toggle('scrolled', window.scrollY > 50);

        const btn = $('#backToTop');
        btn.classList.toggle('visible', window.scrollY > 600);
    });

    // Back to top
    $('#backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Brand filters
    $$('.brand-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            $$('.brand-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentBrand = chip.dataset.brand;
            renderProducts();
        });
    });

    // Sort
    $('#sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    // View toggles
    $$('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            const grid = $('#productsGrid');
            grid.classList.toggle('list-view', currentView === 'list');
        });
    });

    // Search
    const handleSearch = (value) => {
        searchQuery = value.toLowerCase();
        renderProducts();
    };
    $('#searchInput')?.addEventListener('input', (e) => handleSearch(e.target.value));
    $('#mobileSearchInput')?.addEventListener('input', (e) => handleSearch(e.target.value));

    // Mobile search toggle
    $('#mobileSearchBtn')?.addEventListener('click', () => {
        $('#mobileSearchBar').classList.toggle('active');
        $('#mobileSearchInput').focus();
    });

    // Cart
    $('#cartBtn').addEventListener('click', openCart);
    $('#cartClose').addEventListener('click', closeCart);
    $('#cartOverlay').addEventListener('click', closeCart);

    // Clear cart
    $('#clearCartBtn').addEventListener('click', () => {
        cart = [];
        saveCart();
        updateCart();
        showToast('Bag cleared', 'fas fa-trash');
    });

    // Checkout
    $('#checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) return;
        closeCart();
        setTimeout(() => {
            const modal = new bootstrap.Modal($('#checkoutModal'));
            modal.show();
            cart = [];
            saveCart();
            updateCart();
        }, 400);
    });
}

// ---- RENDER PRODUCTS ----
function renderProducts() {
    const grid = $('#productsGrid');
    let filtered = [...products];

    // Filter by brand
    if (currentBrand !== 'all') {
        filtered = filtered.filter(p => p.brand === currentBrand);
    }

    // Filter by search
    if (searchQuery) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchQuery) ||
            p.brandLabel.toLowerCase().includes(searchQuery) ||
            p.desc.toLowerCase().includes(searchQuery)
        );
    }

    // Sort
    switch (currentSort) {
        case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
        case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    // Update count
    $('#resultsCount').textContent = `${filtered.length} Product${filtered.length !== 1 ? 's' : ''}`;

    // Show/hide no results
    $('#noResults').classList.toggle('d-none', filtered.length > 0);

    grid.innerHTML = filtered.map((p, i) => {
        const isWished = wishlist.includes(p.id);
        const badgeHTML = p.badge ?
            `<div class="product-badge">
                <span class="badge-tag badge-${p.badge}">${p.badge.toUpperCase()}</span>
            </div>` : '';

        return `
        <div class="col-lg-3 col-md-4 col-sm-6" style="--delay: ${i * 0.05}s">
            <div class="product-card" data-id="${p.id}">
                ${badgeHTML}
                <button class="product-wishlist ${isWished ? 'active' : ''}" onclick="toggleWishlist(${p.id}, this)">
                    <i class="fa${isWished ? 's' : 'r'} fa-heart"></i>
                </button>
                <div class="product-img-wrapper">
                    <img src="${p.image}" alt="${p.name}" class="product-img"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="product-img-placeholder" style="display:none">
                        <i class="fas fa-shoe-prints"></i>
                    </div>
                    <div class="product-actions">
                        <button class="action-btn" onclick="quickView(${p.id})" title="Quick View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn" onclick="addToCart(${p.id})" title="Add to Bag">
                            <i class="fas fa-bag-shopping"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-brand">${p.brandLabel}</span>
                    <h3 class="product-name">${p.name}</h3>
                    <p class="product-desc">${p.desc}</p>
                    <div class="product-footer">
                        <div class="product-price">
                            $${p.price}
                            ${p.originalPrice ? `<span class="price-original">$${p.originalPrice}</span>` : ''}
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(${p.id})">
                            ADD TO BAG
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');

    // Animate cards in with Intersection Observer
    requestAnimationFrame(() => {
        const cards = grid.querySelectorAll('.product-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 60);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => observer.observe(card));
    });
}

// ---- QUICK VIEW ----
function quickView(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    const body = $('#quickViewBody');
    body.innerHTML = `
        <div class="quick-view-grid">
            <div class="quick-view-img">
                <img src="${p.image}" alt="${p.name}"
                     onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'fas fa-shoe-prints\\'></i>';">
            </div>
            <div class="quick-view-info">
                <span class="quick-view-brand">${p.brandLabel}</span>
                <h2 class="quick-view-name">${p.name}</h2>
                <div class="quick-view-price">
                    $${p.price}
                    ${p.originalPrice ? `<span class="price-original">$${p.originalPrice}</span>` : ''}
                </div>
                <p class="quick-view-desc">${p.desc}</p>
                <div class="quick-view-sizes">
                    <h6>SELECT SIZE</h6>
                    <div class="qv-sizes">
                        ${p.sizes.map(s => `<button class="qv-size" onclick="this.parentElement.querySelectorAll('.qv-size').forEach(b=>b.classList.remove('selected')); this.classList.add('selected')">${s}</button>`).join('')}
                    </div>
                </div>
                <button class="btn btn-glow w-100" onclick="addToCart(${p.id}); bootstrap.Modal.getInstance(document.getElementById('quickViewModal')).hide();">
                    <i class="fas fa-bag-shopping me-2"></i>ADD TO BAG - $${p.price}
                </button>
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal($('#quickViewModal'));
    modal.show();
}

// ---- CART ----
function addToCart(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id: p.id, qty: 1, size: p.sizes[Math.floor(p.sizes.length / 2)] });
    }

    saveCart();
    updateCart();
    showToast(`${p.name} added to bag`);

    // Button animation
    const btn = document.querySelector(`.product-card[data-id="${id}"] .add-to-cart-btn`);
    if (btn) {
        btn.textContent = 'ADDED!';
        btn.classList.add('added');
        setTimeout(() => {
            btn.textContent = 'ADD TO BAG';
            btn.classList.remove('added');
        }, 1500);
    }

    // Cart count bump
    const count = $('#cartCount');
    count.classList.remove('bump');
    void count.offsetWidth;
    count.classList.add('bump');
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCart();
}

function updateQty(id, delta) {
    const item = cart.find(x => x.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
        return;
    }
    saveCart();
    updateCart();
}

function saveCart() {
    localStorage.setItem('cv_cart', JSON.stringify(cart));
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    $('#cartCount').textContent = totalItems;

    const isEmpty = cart.length === 0;
    $('#cartEmpty').style.display = isEmpty ? 'block' : 'none';
    $('#cartFooter').style.display = isEmpty ? 'none' : 'block';

    const itemsContainer = $('#cartItems');
    itemsContainer.innerHTML = cart.map(item => {
        const p = products.find(x => x.id === item.id);
        if (!p) return '';
        return `
        <div class="cart-item">
            <div class="cart-item-img">
                <img src="${p.image}" alt="${p.name}"
                     onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'fas fa-shoe-prints\\'></i>';">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-brand">${p.brandLabel}</div>
                <div class="cart-item-name">${p.name}</div>
                <div class="cart-item-size">Size: ${item.size}</div>
                <div class="cart-item-bottom">
                    <span class="cart-item-price">$${p.price * item.qty}</span>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                        <span class="qty-value">${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        </div>`;
    }).join('');

    // Totals
    const subtotal = cart.reduce((sum, item) => {
        const p = products.find(x => x.id === item.id);
        return sum + (p ? p.price * item.qty : 0);
    }, 0);

    const shipping = subtotal >= 150 ? 0 : 12;
    $('#cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    $('#cartShipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    $('#cartTotal').textContent = `$${(subtotal + shipping).toFixed(2)}`;
}

function openCart() {
    $('#cartSidebar').classList.add('active');
    $('#cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    $('#cartSidebar').classList.remove('active');
    $('#cartOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ---- WISHLIST ----
function toggleWishlist(id, btn) {
    const index = wishlist.indexOf(id);
    if (index > -1) {
        wishlist.splice(index, 1);
        btn.classList.remove('active');
        btn.querySelector('i').className = 'far fa-heart';
        showToast('Removed from wishlist', 'fas fa-heart-broken');
    } else {
        wishlist.push(id);
        btn.classList.add('active');
        btn.querySelector('i').className = 'fas fa-heart';
        showToast('Added to wishlist', 'fas fa-heart');
    }
    localStorage.setItem('cv_wishlist', JSON.stringify(wishlist));
}

// ---- TOAST ----
function showToast(message, icon = 'fas fa-check-circle') {
    const container = $('#toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<i class="${icon}"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3200);
}
