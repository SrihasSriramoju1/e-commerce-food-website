// QuickBite - Dynamic Food Delivery Website JavaScript

// ============================================
// Data - Restaurant and Menu Information
// ============================================

const categories = [
    { id: 'all', name: 'All', icon: 'fa-utensils', description: 'View all restaurants' },
    { id: 'pizza', name: 'Pizza', icon: 'fa-pizza-slice', description: 'Italian & American' },
    { id: 'burger', name: 'Burgers', icon: 'fa-hamburger', description: 'Gourmet & Classic' },
    { id: 'asian', name: 'Asian', icon: 'fa-bowl-rice', description: 'Chinese, Japanese & Thai' },
    { id: 'indian', name: 'Indian', icon: 'fa-pepper-hot', description: 'Traditional & Modern' },
    { id: 'italian', name: 'Italian', icon: 'fa-cheese', description: 'Pasta & Risotto' },
    { id: 'mexican', name: 'Mexican', icon: 'fa-pepper-hot', description: 'Tacos & Burritos' },
    { id: 'desserts', name: 'Desserts', icon: 'fa-ice-cream', description: 'Sweets & Treats' }
];

const restaurants = [
    {
        id: 1,
        name: 'Paradise Biryani',
        cuisine: 'Indian, Biryani, Hyderabadi',
        rating: 4.7,
        deliveryTime: '25-35 min',
        minOrder: '₹200',
        location: 'Madhapur, Hyderabad',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356f36?w=400',
        popularItems: ['Chicken Dum Biryani', 'Mutton Biryani', 'Paneer Biryani'],
        menu: [
            { id: 101, name: 'Chicken Dum Biryani', description: 'Traditional aromatic basmati rice with chicken', price: 350, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200' },
            { id: 102, name: 'Mutton Biryani', description: 'Tender mutton with fragrant rice', price: 450, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200' },
            { id: 103, name: 'Paneer Biryani', description: 'Cottage cheese with spiced rice', price: 300, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200' },
            { id: 104, name: 'Mirchi Ka Salan', description: 'Spicy peanut-sesame curry', price: 120, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200' }
        ]
    },
    {
        id: 2,
        name: 'Domino\'s Pizza',
        cuisine: 'Italian, Pizza, Fast Food',
        rating: 4.5,
        deliveryTime: '20-30 min',
        minOrder: '₹250',
        location: 'Jubilee Hills, Hyderabad',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400',
        popularItems: ['Farmhouse Pizza', 'Pepperoni Pizza', 'Garlic Bread'],
        menu: [
            { id: 201, name: 'Farmhouse Pizza', description: 'Onion, capsicum, mushroom, tomato', price: 399, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200' },
            { id: 202, name: 'Pepperoni Pizza', description: 'Loaded with pepperoni and cheese', price: 499, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200' },
            { id: 203, name: 'Garlic Bread', description: 'Crispy bread with garlic butter', price: 99, image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=200' },
            { id: 204, name: 'Chicken Pasta', description: 'Creamy tomato pasta with chicken', price: 249, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200' }
        ]
    },
    {
        id: 3,
        name: 'Bawarchi Biryani Point',
        cuisine: 'Indian, Biryani, Hyderabadi',
        rating: 4.8,
        deliveryTime: '30-40 min',
        minOrder: '₹150',
        location: 'Gachibowli, Hyderabad',
        image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=400',
        popularItems: ['Chicken 65 Biryani', 'Special Biryani', 'Kebab'],
        menu: [
            { id: 301, name: 'Chicken 65 Biryani', description: 'Spicy chicken with fragrant rice', price: 320, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200' },
            { id: 302, name: 'Special Biryani', description: 'Chef\'s special aromatic biryani', price: 420, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200' },
            { id: 303, name: 'Tandoori Kebab', description: 'Spiced meat cooked in tandoor', price: 280, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200' },
            { id: 304, name: 'Boiled Eggs', description: 'Simple boiled eggs with pepper', price: 50, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200' }
        ]
    },
    {
        id: 4,
        name: 'Shah Ghouse Hotel',
        cuisine: 'Indian, Biryani, Mughlai',
        rating: 4.6,
        deliveryTime: '25-35 min',
        minOrder: '₹200',
        location: 'Banjara Hills, Hyderabad',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356f36?w=400',
        popularItems: ['Chicken Biryani', 'Haleem', 'Naan'],
        menu: [
            { id: 401, name: 'Chicken Biryani', description: 'Aromatic basmati rice with chicken', price: 380, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200' },
            { id: 402, name: 'Haleem', description: 'Slow-cooked meat stew with wheat', price: 350, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200' },
            { id: 403, name: 'Butter Naan', description: 'Soft bread with butter', price: 60, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200' },
            { id: 404, name: 'Chicken 65', description: 'Spicy deep-fried chicken pieces', price: 280, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200' }
        ]
    },
    {
        id: 5,
        name: 'Pista House',
        cuisine: 'Indian, Biryani, Kebabs',
        rating: 4.7,
        deliveryTime: '20-30 min',
        minOrder: '₹250',
        location: 'Hitech City, Hyderabad',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400',
        popularItems: ['Family Biryani', 'Tandoori Chicken', 'Falooda'],
        menu: [
            { id: 501, name: 'Family Biryani', description: 'Large biryani for family (serves 4)', price: 850, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200' },
            { id: 502, name: 'Tandoori Chicken', description: 'Whole chicken marinated in yogurt', price: 450, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200' },
            { id: 503, name: 'Double Ka Meetha', description: 'Hyderabadi bread pudding dessert', price: 120, image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=200' },
            { id: 504, name: 'Falooda', description: 'Rose milk with vermicelli', price: 150, image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=200' }
        ]
    },
    {
        id: 6,
        name: 'Almond House',
        cuisine: 'Indian, Desserts, Sweets',
        rating: 4.8,
        deliveryTime: '15-25 min',
        minOrder: '₹200',
        location: 'Secunderabad, Hyderabad',
        image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=400',
        popularItems: ['Badusha', 'Qubani Ka Meetha', 'Kalakand'],
        menu: [
            { id: 601, name: 'Badusha', description: 'Traditional sweet pastry', price: 450, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200' },
            { id: 602, name: 'Qubani Ka Meetha', description: 'Dried apricot sweet dessert', price: 280, image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=200' },
            { id: 603, name: 'Kalakand', description: 'Milk-based sweet with cardamom', price: 350, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200' },
            { id: 604, name: 'Gulab Jamun', description: 'Deep-fried milk balls in syrup', price: 200, image: 'https://images.unsplash.com/photo-1599639668164-538e7263e302?w=200' }
        ]
    }
];

const deals = [
    {
        id: 1,
        title: '50% OFF on First Order',
        description: 'New users get half off on their first order',
        discount: 50,
        originalPrice: 500,
        discountedPrice: 250,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500'
    },
    {
        id: 2,
        title: 'Free Delivery on Orders Above ₹500',
        description: 'Get free delivery when you order more',
        discount: 100,
        originalPrice: 50,
        discountedPrice: 0,
        image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=500'
    },
    {
        id: 3,
        title: 'Buy 1 Get 1 Free Biryani',
        description: 'On all biryani orders every Friday',
        discount: 50,
        originalPrice: 400,
        discountedPrice: 200,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
    }
];

// ============================================
// State Management
// ============================================

let cart = JSON.parse(localStorage.getItem('quickbite_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('quickbite_wishlist')) || [];

// ============================================
// DOM Elements
// ============================================

const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const categoryGrid = document.getElementById('categoryGrid');
const restaurantsGrid = document.getElementById('restaurantsGrid');
const dealsGrid = document.getElementById('dealsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const restaurantModal = document.getElementById('restaurantModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeCategories();
    initializeDeals();
    initializeRestaurants();
    initializeFilters();
    initializeSearch();
    updateCartUI();
    setupEventListeners();
    animateOnScroll();
});

// ============================================
// Event Listeners Setup
// ============================================

function setupEventListeners() {
    // Cart toggle
    cartBtn.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    
    // Modal
    closeModal.addEventListener('click', closeRestaurantModal);
    restaurantModal.addEventListener('click', (e) => {
        if (e.target === restaurantModal) closeRestaurantModal();
    });
    
    // Location input
    document.getElementById('locationInput').addEventListener('input', handleLocationSearch);
    
    // Close modal on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeRestaurantModal();
        }
    });
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Categories
// ============================================

function initializeCategories() {
    categoryGrid.innerHTML = categories.map(category => `
        <div class="category-card" data-category="${category.id}">
            <i class="fas ${category.icon}"></i>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        </div>
    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => handleCategoryClick(card));
    });
}

function handleCategoryClick(card) {
    // Remove active class from all
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    // Add to clicked
    card.classList.add('active');
    
    const categoryId = card.dataset.category;
    filterRestaurants(categoryId);
    
    // Scroll to restaurants
    document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
    
    showToast(`Showing ${card.querySelector('h3').textContent} restaurants`, 'success');
}

// ============================================
// Deals
// ============================================

function initializeDeals() {
    dealsGrid.innerHTML = deals.map(deal => `
        <div class="deal-card">
            <div class="deal-image">
                <img src="${deal.image}" alt="${deal.title}">
                <span class="deal-badge">${deal.discount}% OFF</span>
            </div>
            <div class="deal-content">
                <h3>${deal.title}</h3>
                <p>${deal.description}</p>
                <div class="deal-footer">
                    <div class="deal-price">
                        <span class="original">₹${deal.originalPrice.toFixed(0)}</span>
                        <span class="discounted">₹${deal.discountedPrice.toFixed(0)}</span>
                    </div>
                    <button class="order-btn" onclick="useDeal(${deal.id})">Order Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

function useDeal(dealId) {
    const deal = deals.find(d => d.id === dealId);
    if (deal) {
        showToast(`Deal applied: ${deal.title}`, 'success');
        document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// Restaurants
// ============================================

function initializeRestaurants() {
    renderRestaurants(restaurants);
}

function renderRestaurants(restaurantsToRender) {
    restaurantsGrid.innerHTML = restaurantsToRender.map(restaurant => `
        <div class="restaurant-card" data-id="${restaurant.id}">
            <div class="restaurant-image">
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <span class="restaurant-rating"><i class="fas fa-star"></i> ${restaurant.rating}</span>
                <span class="restaurant-time"><i class="fas fa-clock"></i> ${restaurant.deliveryTime}</span>
            </div>
            <div class="restaurant-content">
                <h3>${restaurant.name}</h3>
                <p class="cuisine">${restaurant.cuisine}</p>
                <div class="restaurant-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${restaurant.location}</span>
                </div>
                <div class="restaurant-footer">
                    <span class="min-order">Min: ${restaurant.minOrder}</span>
                    <button class="view-menu-btn" onclick="openRestaurantModal(${restaurant.id})">View Menu</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers for cards
    document.querySelectorAll('.restaurant-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('view-menu-btn')) {
                openRestaurantModal(parseInt(card.dataset.id));
            }
        });
    });
    
    // Animate cards
    animateElements('.restaurant-card');
}

function filterRestaurants(category) {
    let filtered = [...restaurants];
    
    if (category !== 'all') {
        filtered = restaurants.filter(r => 
            r.cuisine.toLowerCase().includes(category.toLowerCase()) ||
            r.name.toLowerCase().includes(category.toLowerCase())
        );
    }
    
    renderRestaurants(filtered);
    showToast(`Found ${filtered.length} restaurants`, 'success');
}

// ============================================
// Filters
// ============================================

function initializeFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn));
    });
}

function handleFilter(btn) {
    // Remove active from all
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add to clicked
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    let sorted = [...restaurants];
    
    switch(filter) {
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'delivery':
            sorted.sort((a, b) => {
                const timeA = parseInt(a.deliveryTime);
                const timeB = parseInt(b.deliveryTime);
                return timeA - timeB;
            });
            break;
        case 'cost':
            sorted.sort((a, b) => {
                const costA = parseFloat(a.minOrder.replace('₹', ''));
                const costB = parseFloat(b.minOrder.replace('₹', ''));
                return costA - costB;
            });
            break;
    }
    
    renderRestaurants(sorted);
    showToast(`Sorted by: ${btn.textContent}`, 'success');
}

// ============================================
// Restaurant Modal
// ============================================

function openRestaurantModal(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${restaurant.image}" alt="${restaurant.name}">
        </div>
        <h2>${restaurant.name}</h2>
        <div class="restaurant-meta">
            <span><i class="fas fa-star"></i> ${restaurant.rating}</span>
            <span><i class="fas fa-clock"></i> ${restaurant.deliveryTime}</span>
            <span><i class="fas fa-map-marker-alt"></i> ${restaurant.location}</span>
        </div>
        <p>${restaurant.cuisine}</p>
        
        <div class="modal-menu-section">
            <h3>Popular Items</h3>
            ${restaurant.popularItems.map(item => `
                <div class="menu-item">
                    <div class="menu-item-info">
                        <h4>${item}</h4>
                        <p>Customer favorite!</p>
                    </div>
                    <div class="menu-item-action">
                        <span class="menu-item-price">₹${getItemPrice(restaurant, item)}</span>
                        <button class="add-to-cart-btn" onclick="addToCartFromModal(${restaurant.id}, '${item}')">Add to Cart</button>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="modal-menu-section">
            <h3>Full Menu</h3>
            ${restaurant.menu.map(item => `
                <div class="menu-item">
                    <div class="menu-item-info">
                        <h4>${item.name}</h4>
                        <p>${item.description}</p>
                    </div>
                    <div class="menu-item-action">
                        <span class="menu-item-price">₹${item.price.toFixed(0)}</span>
                        <button class="add-to-cart-btn" onclick="addToCartFromModal(${restaurant.id}, '${item.name}')">Add to Cart</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    restaurantModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animate modal content
    animateElements('.menu-item');
}

function getItemPrice(restaurant, itemName) {
    const item = restaurant.menu.find(i => i.name === itemName);
    return item ? item.price.toFixed(0) : '0';
}

function closeRestaurantModal() {
    restaurantModal.classList.remove('active');
    document.body.style.overflow = '';
}

function addToCartFromModal(restaurantId, itemName) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    const item = restaurant.menu.find(i => i.name === itemName);
    
    if (item) {
        addToCart(item, restaurant);
        showToast(`${item.name} added to cart!`, 'success');
    }
}

// ============================================
// Cart Management
// ============================================

function addToCart(item, restaurant) {
    const existingItem = cart.find(c => c.id === item.id && c.restaurantId === restaurant.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...item,
            restaurantId: restaurant.id,
            restaurantName: restaurant.name,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    animateCartButton();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
}

function updateQuantity(itemId, change) {
    const item = cart.find(c => c.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('quickbite_cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">₹${item.price.toFixed(0)}</p>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₹${total.toFixed(0)}`;
}

function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    
    if (cartSidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function animateCartButton() {
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}

// ============================================
// Search Functionality
// ============================================

function initializeSearch() {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.length > 0) {
            searchSuggestions.classList.add('active');
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar')) {
            searchSuggestions.classList.remove('active');
        }
    });
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length === 0) {
        searchSuggestions.classList.remove('active');
        return;
    }
    
    // Search in restaurants and menu items
    const suggestions = [];
    
    restaurants.forEach(restaurant => {
        if (restaurant.name.toLowerCase().includes(query)) {
            suggestions.push({
                type: 'restaurant',
                name: restaurant.name,
                icon: 'fa-store',
                action: () => openRestaurantModal(restaurant.id)
            });
        }
        
        restaurant.menu.forEach(item => {
            if (item.name.toLowerCase().includes(query)) {
                suggestions.push({
                    type: 'item',
                    name: item.name,
                    icon: 'fa-utensils',
                    action: () => openRestaurantModal(restaurant.id)
                });
            }
        });
    });
    
    // Also search categories
    categories.forEach(category => {
        if (category.name.toLowerCase().includes(query)) {
            suggestions.push({
                type: 'category',
                name: category.name,
                icon: category.icon,
                action: () => {
                    document.querySelector(`[data-category="${category.id}"]`).click();
                }
            });
        }
    });
    
    // Limit suggestions
    const limitedSuggestions = suggestions.slice(0, 8);
    
    if (limitedSuggestions.length > 0) {
        searchSuggestions.innerHTML = limitedSuggestions.map(suggestion => `
            <div class="suggestion-item" data-type="${suggestion.type}">
                <i class="fas ${suggestion.icon}"></i>
                <span>${suggestion.name}</span>
            </div>
        `).join('');
        
        searchSuggestions.classList.add('active');
        
        // Add click handlers
        document.querySelectorAll('.suggestion-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                limitedSuggestions[index].action();
                searchSuggestions.classList.remove('active');
                searchInput.value = '';
            });
        });
    } else {
        searchSuggestions.innerHTML = '<div class="suggestion-item"><i class="fas fa-search"></i><span>No results found</span></div>';
        searchSuggestions.classList.add('active');
    }
}

function handleLocationSearch(e) {
    const location = e.target.value.toLowerCase();
    if (location.length > 2) {
        // Simulate location-based filtering
        showToast(`Finding restaurants near "${location}"...`, 'success');
    }
}

// ============================================
// Toast Notifications
// ============================================

function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('active'), 10);
    
    // Remove after delay
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// Scroll Animations
// ============================================

function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.category-card, .deal-card, .restaurant-card, .step').forEach(el => {
        observer.observe(el);
    });
}

function animateElements(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'all 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ============================================
// Add CSS for animations
// ============================================

const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .category-card, .deal-card, .restaurant-card, .step {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .category-card.animate-in, .deal-card.animate-in, .restaurant-card.animate-in, .step.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// ============================================
// Utility Functions
// ============================================

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Random delay generator for realistic feel
function randomDelay(min, max) {
    return Math.random() * (max - min) + min;
}

// Make functions available globally
window.openRestaurantModal = openRestaurantModal;
window.addToCartFromModal = addToCartFromModal;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.useDeal = useDeal;
