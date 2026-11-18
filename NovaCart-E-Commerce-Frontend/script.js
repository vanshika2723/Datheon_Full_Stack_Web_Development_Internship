/* =========================================================
   NOVACART — E-COMMERCE FRONTEND
   JavaScript
   ========================================================= */

/* ================= PRODUCT DATA ================= */

const products = [
    {
        id: 1,
        name: "Nova Wireless Headphones",
        category: "Electronics",
        price: 2499,
        oldPrice: 3999,
        rating: 4.8,
        reviews: 124,
        icon: "fa-headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
        badge: "SALE",
        description: "Experience immersive sound with comfortable wireless headphones featuring deep bass, clear vocals and long-lasting battery life."
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        category: "Electronics",
        price: 3299,
        oldPrice: 4999,
        rating: 4.7,
        reviews: 98,
        icon: "fa-clock",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
        badge: "POPULAR",
        description: "Track your daily activity, monitor workouts and stay connected with a stylish smart watch designed for everyday use."
    },
    {
        id: 3,
        name: "Premium Laptop Backpack",
        category: "Fashion",
        price: 1499,
        oldPrice: 2199,
        rating: 4.6,
        reviews: 86,
        icon: "fa-bag-shopping",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85",
        badge: "NEW",
        description: "A sleek and durable laptop backpack with spacious compartments, padded laptop protection and comfortable shoulder straps."
    },
    {
        id: 4,
        name: "Classic Sneakers",
        category: "Fashion",
        price: 2199,
        oldPrice: 3499,
        rating: 4.8,
        reviews: 152,
        icon: "fa-shoe-prints",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
        badge: "SALE",
        description: "Modern everyday sneakers combining comfort, lightweight construction and a versatile design for casual outfits."
    },
    {
        id: 5,
        name: "Glow Skincare Set",
        category: "Beauty",
        price: 999,
        oldPrice: 1599,
        rating: 4.5,
        reviews: 75,
        icon: "fa-spa",
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=85",
        badge: "NEW",
        description: "A simple skincare collection designed for an easy daily self-care routine with refreshing and lightweight products."
    },
    {
        id: 6,
        name: "Minimal Table Lamp",
        category: "Home",
        price: 1299,
        oldPrice: 1899,
        rating: 4.4,
        reviews: 61,
        icon: "fa-lightbulb",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85",
        badge: "SALE",
        description: "Add a warm and elegant touch to your workspace or bedroom with this modern minimal table lamp."
    },
    {
        id: 7,
        name: "Yoga Fitness Mat",
        category: "Sports",
        price: 799,
        oldPrice: 1199,
        rating: 4.7,
        reviews: 113,
        icon: "fa-person-running",
        image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=700&q=85",
        badge: "POPULAR",
        description: "A comfortable non-slip fitness mat suitable for yoga, stretching, home workouts and everyday exercise."
    },
    {
        id: 8,
        name: "Polarized Sunglasses",
        category: "Accessories",
        price: 899,
        oldPrice: 1499,
        rating: 4.5,
        reviews: 67,
        icon: "fa-glasses",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85",
        badge: "TRENDING",
        description: "Stylish polarized sunglasses with a lightweight frame designed for everyday outdoor use."
    },
    {
        id: 9,
        name: "Portable Bluetooth Speaker",
        category: "Electronics",
        price: 1799,
        oldPrice: 2799,
        rating: 4.6,
        reviews: 91,
        icon: "fa-volume-high",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=85",
        badge: "SALE",
        description: "Compact Bluetooth speaker with powerful audio, portable design and convenient wireless connectivity."
    },
    {
        id: 10,
        name: "Classic Cotton Hoodie",
        category: "Fashion",
        price: 1399,
        oldPrice: 2199,
        rating: 4.7,
        reviews: 104,
        icon: "fa-shirt",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=85",
        badge: "NEW",
        description: "A comfortable cotton hoodie with a clean classic design, perfect for casual everyday styling."
    },
    {
        id: 11,
        name: "Ceramic Coffee Mug",
        category: "Home",
        price: 499,
        oldPrice: 799,
        rating: 4.4,
        reviews: 49,
        icon: "fa-mug-hot",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=85",
        badge: "DEAL",
        description: "A stylish ceramic mug designed for coffee, tea and everyday beverages at home or work."
    },
    {
        id: 12,
        name: "Resistance Bands Set",
        category: "Sports",
        price: 699,
        oldPrice: 1099,
        rating: 4.6,
        reviews: 82,
        icon: "fa-dumbbell",
        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=700&q=85",
        badge: "POPULAR",
        description: "A versatile resistance band set for strength training, mobility exercises and home workouts."
    },
    {
        id: 13,
        name: "Smartphone Stand",
        category: "Accessories",
        price: 399,
        oldPrice: 699,
        rating: 4.3,
        reviews: 45,
        icon: "fa-mobile-screen-button",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=700&q=85",
        badge: "DEAL",
        description: "A compact adjustable smartphone stand ideal for video calls, watching content and keeping your desk organized."
    },
    {
        id: 14,
        name: "Perfume Collection",
        category: "Beauty",
        price: 1599,
        oldPrice: 2499,
        rating: 4.8,
        reviews: 137,
        icon: "fa-spray-can-sparkles",
        image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=700&q=85",
        badge: "POPULAR",
        description: "A sophisticated fragrance collection featuring elegant scents suitable for everyday wear and special occasions."
    },
    {
        id: 15,
        name: "LED Desk Organizer",
        category: "Home",
        price: 899,
        oldPrice: 1399,
        rating: 4.5,
        reviews: 54,
        icon: "fa-box",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=85",
        badge: "NEW",
        description: "Keep your workspace neat with a modern desk organizer featuring useful storage and ambient LED lighting."
    },
    {
        id: 16,
        name: "Travel Duffel Bag",
        category: "Accessories",
        price: 1199,
        oldPrice: 1899,
        rating: 4.6,
        reviews: 73,
        icon: "fa-suitcase",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85",
        badge: "SALE",
        description: "A spacious travel duffel bag with durable construction and convenient compartments for short trips."
    }
];


/* ================= STATE ================= */

let cart = JSON.parse(localStorage.getItem("novaCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("novaWishlist")) || [];

let activeCategory = "All";
let searchTerm = "";
let sortValue = "default";
let appliedCoupon = false;


/* ================= DOM ELEMENTS ================= */

const productGrid = document.getElementById("productGrid");
const noProducts = document.getElementById("noProducts");
const productResultText = document.getElementById("productResultText");

const searchToggle = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartSummary = document.getElementById("cartSummary");

const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");

const cartSubtotal = document.getElementById("cartSubtotal");
const cartDiscount = document.getElementById("cartDiscount");
const cartDelivery = document.getElementById("cartDelivery");
const cartTotal = document.getElementById("cartTotal");

const couponInput = document.getElementById("couponInput");
const applyCoupon = document.getElementById("applyCoupon");
const couponMessage = document.getElementById("couponMessage");

const productModal = document.getElementById("productModal");
const productModalContent = document.getElementById("productModalContent");

const wishlistModal = document.getElementById("wishlistModal");
const wishlistGrid = document.getElementById("wishlistGrid");
const wishlistEmpty = document.getElementById("wishlistEmpty");
const wishlistModalCount = document.getElementById("wishlistModalCount");

const checkoutModal = document.getElementById("checkoutModal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutItems = document.getElementById("checkoutItems");
const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const checkoutDiscount = document.getElementById("checkoutDiscount");
const checkoutTotal = document.getElementById("checkoutTotal");

const successModal = document.getElementById("successModal");
const orderId = document.getElementById("orderId");

const toastContainer = document.getElementById("toastContainer");


/* ================= HELPER FUNCTIONS ================= */

function formatPrice(amount) {
    return `₹${amount.toLocaleString("en-IN")}`;
}


function saveCart() {
    localStorage.setItem("novaCart", JSON.stringify(cart));
}


function saveWishlist() {
    localStorage.setItem("novaWishlist", JSON.stringify(wishlist));
}


function getProduct(productId) {
    return products.find(product => product.id === Number(productId));
}


function getCartQuantity() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}


function getCartSubtotal() {
    return cart.reduce((total, item) => {
        const product = getProduct(item.id);

        if (!product) return total;

        return total + product.price * item.quantity;
    }, 0);
}


function getDiscount() {
    if (!appliedCoupon) {
        return 0;
    }

    return Math.round(getCartSubtotal() * 0.50);
}


function getCartTotal() {
    return getCartSubtotal() - getDiscount();
}


/* ================= TOAST ================= */

function showToast(message, type = "success") {

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    let icon = "fa-circle-check";

    if (type === "error") {
        icon = "fa-circle-exclamation";
    }

    if (type === "info") {
        icon = "fa-circle-info";
    }

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    if (toastContainer) {
        toastContainer.appendChild(toast);
    }

    setTimeout(() => {

        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";

        setTimeout(() => {
            toast.remove();
        }, 250);

    }, 2800);
}


/* ================= PRODUCT IMAGE ================= */

function productImage(product, className = "") {

    return `
        <img
            src="${product.image}"
            alt="${product.name}"
            class="${className}"
            loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <span
            class="image-fallback"
            style="display:none;"
        >
            <i class="fa-solid ${product.icon}"></i>
        </span>
    `;
}


/* ================= PRODUCT RENDER ================= */

function renderProducts() {

    let filteredProducts = products.filter(product => {

        const matchesCategory =
            activeCategory === "All" ||
            product.category === activeCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });


    /* Sorting */

    if (sortValue === "price-low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortValue === "price-high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (sortValue === "rating") {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    if (sortValue === "name") {
        filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }


    productGrid.innerHTML = "";


    if (filteredProducts.length === 0) {

        noProducts.classList.add("show");

        productResultText.textContent = "No products found";

        return;
    }


    noProducts.classList.remove("show");

    productResultText.textContent =
        `Showing ${filteredProducts.length} product${filteredProducts.length > 1 ? "s" : ""}`;


    filteredProducts.forEach(product => {

        const isWishlisted = wishlist.includes(product.id);

        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">

                <span class="product-badge">
                    ${product.badge}
                </span>

                <button
                    class="wishlist-product-btn ${isWishlisted ? "active" : ""}"
                    data-wishlist="${product.id}"
                    aria-label="Add to wishlist"
                >
                    <i class="fa-${isWishlisted ? "solid" : "regular"} fa-heart"></i>
                </button>

                ${productImage(product, "product-img")}

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-title">
                    ${product.name}
                </h3>

                <div class="product-rating">
                    ${createStars(product.rating)}
                    <span>(${product.reviews})</span>
                </div>

                <div class="product-price">

                    <strong class="current-price">
                        ${formatPrice(product.price)}
                    </strong>

                    <span class="old-price">
                        ${formatPrice(product.oldPrice)}
                    </span>

                </div>

                <button
                    class="add-cart-btn"
                    data-cart="${product.id}"
                >
                    <i class="fa-solid fa-cart-plus"></i>
                    Add to Cart
                </button>

            </div>
        `;

        productGrid.appendChild(card);
    });
}


/* ================= STAR RATING ================= */

function createStars(rating) {

    let stars = "";

    const roundedRating = Math.round(rating);

    for (let i = 1; i <= 5; i++) {

        if (i <= roundedRating) {
            stars += `<i class="fa-solid fa-star"></i>`;
        } else {
            stars += `<i class="fa-regular fa-star"></i>`;
        }
    }

    return stars;
}


/* ================= CART ================= */

function addToCart(productId, quantity = 1) {

    const existingItem = cart.find(
        item => item.id === Number(productId)
    );


    if (existingItem) {

        existingItem.quantity += quantity;

    } else {

        cart.push({
            id: Number(productId),
            quantity: quantity
        });
    }


    saveCart();

    updateCartUI();

    const product = getProduct(productId);

    if (product) {
        showToast(`${product.name} added to cart`);
    }

    closeProductModal();
}


function updateCartQuantity(productId, change) {

    const item = cart.find(
        cartItem => cartItem.id === Number(productId)
    );

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart = cart.filter(
            cartItem => cartItem.id !== Number(productId)
        );
    }


    saveCart();

    updateCartUI();

    if (
        checkoutModal &&
        checkoutModal.classList.contains("active")
    ) {
        renderCheckout();
    }
}


function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== Number(productId)
    );

    saveCart();

    updateCartUI();

    showToast("Product removed from cart", "info");

    if (
        checkoutModal &&
        checkoutModal.classList.contains("active")
    ) {
        renderCheckout();
    }
}


function renderCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartEmpty.classList.add("show");
        cartSummary.style.display = "none";

        return;
    }


    cartEmpty.classList.remove("show");
    cartSummary.style.display = "block";


    cart.forEach(item => {

        const product = getProduct(item.id);

        if (!product) return;


        const itemTotal =
            product.price * item.quantity;


        const cartElement =
            document.createElement("div");

        cartElement.className = "cart-item";


        cartElement.innerHTML = `

            <div class="cart-item-image">
                ${productImage(product, "cart-product-img")}
            </div>

            <div class="cart-item-info">

                <h4>${product.name}</h4>

                <p>${formatPrice(product.price)}</p>

                <div class="cart-quantity">

                    <button
                        data-cart-minus="${product.id}"
                        aria-label="Decrease quantity"
                    >
                        <i class="fa-solid fa-minus"></i>
                    </button>

                    <span>${item.quantity}</span>

                    <button
                        data-cart-plus="${product.id}"
                        aria-label="Increase quantity"
                    >
                        <i class="fa-solid fa-plus"></i>
                    </button>

                </div>

            </div>

            <div class="cart-item-right">

                <strong>
                    ${formatPrice(itemTotal)}
                </strong>

                <br>

                <button
                    class="remove-cart-item"
                    data-remove-cart="${product.id}"
                >
                    Remove
                </button>

            </div>
        `;


        cartItems.appendChild(cartElement);
    });
}


function updateCartUI() {

    renderCart();

    const quantity = getCartQuantity();

    cartCount.textContent = quantity;

    const subtotal = getCartSubtotal();

    const discount = getDiscount();

    const total = subtotal - discount;


    cartSubtotal.textContent =
        formatPrice(subtotal);

    cartDiscount.textContent =
        `- ${formatPrice(discount)}`;

    cartTotal.textContent =
        formatPrice(total);


    if (subtotal >= 999 || subtotal === 0) {
        cartDelivery.textContent = "FREE";
    } else {
        cartDelivery.textContent = formatPrice(99);
    }
}


/* ================= WISHLIST ================= */

function toggleWishlist(productId) {

    const id = Number(productId);

    if (wishlist.includes(id)) {

        wishlist = wishlist.filter(
            item => item !== id
        );

        showToast("Removed from wishlist", "info");

    } else {

        wishlist.push(id);

        showToast("Added to wishlist");
    }


    saveWishlist();

    updateWishlistUI();

    renderProducts();
}


function updateWishlistUI() {

    wishlistCount.textContent = wishlist.length;

    wishlistModalCount.textContent =
        `(${wishlist.length})`;


    wishlistGrid.innerHTML = "";


    if (wishlist.length === 0) {

        wishlistEmpty.classList.add("show");

        return;
    }


    wishlistEmpty.classList.remove("show");


    wishlist.forEach(id => {

        const product = getProduct(id);

        if (!product) return;


        const card =
            document.createElement("div");

        card.className = "wishlist-card";


        card.innerHTML = `

            <div class="wishlist-card-image">
                ${productImage(product, "wishlist-product-img")}
            </div>

            <div class="wishlist-card-info">

                <h4>
                    ${product.name}
                </h4>

                <strong>
                    ${formatPrice(product.price)}
                </strong>

                <div class="wishlist-actions">

                    <button
                        class="move-cart-btn"
                        data-wishlist-cart="${product.id}"
                    >
                        Add to Cart
                    </button>

                    <button
                        class="remove-wish-btn"
                        data-remove-wishlist="${product.id}"
                    >
                        Remove
                    </button>

                </div>

            </div>
        `;


        wishlistGrid.appendChild(card);
    });
}


/* ================= PRODUCT MODAL ================= */

function openProductModal(productId) {

    const product = getProduct(productId);

    if (!product) return;


    productModalContent.innerHTML = `

        <div class="modal-product-image">
            ${productImage(product, "modal-product-img")}
        </div>

        <div class="modal-product-details">

            <span class="product-category">
                ${product.category}
            </span>

            <h2>${product.name}</h2>

            <div class="product-rating">
                ${createStars(product.rating)}
                <span>
                    ${product.rating} (${product.reviews} reviews)
                </span>
            </div>

            <p class="modal-description">
                ${product.description}
            </p>

            <div class="modal-price">

                <strong>
                    ${formatPrice(product.price)}
                </strong>

                <span class="old-price">
                    ${formatPrice(product.oldPrice)}
                </span>

            </div>

            <p>
                <strong>Quantity</strong>
            </p>

            <div class="quantity-box">

                <button
                    id="modalMinus"
                    aria-label="Decrease quantity"
                >
                    <i class="fa-solid fa-minus"></i>
                </button>

                <span id="modalQuantity">1</span>

                <button
                    id="modalPlus"
                    aria-label="Increase quantity"
                >
                    <i class="fa-solid fa-plus"></i>
                </button>

            </div>

            <button
                class="btn primary-btn modal-add-cart"
                id="modalAddCart"
            >
                <i class="fa-solid fa-cart-plus"></i>
                Add to Cart
            </button>

        </div>
    `;


    productModal.classList.add("active");

    document.body.classList.add("no-scroll");


    let quantity = 1;

    const quantityDisplay =
        document.getElementById("modalQuantity");


    document.getElementById("modalMinus")
        .addEventListener("click", () => {

            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });


    document.getElementById("modalPlus")
        .addEventListener("click", () => {

            if (quantity < 20) {
                quantity++;
                quantityDisplay.textContent = quantity;
            }
        });


    document.getElementById("modalAddCart")
        .addEventListener("click", () => {

            addToCart(product.id, quantity);
        });
}


function closeProductModal() {

    productModal.classList.remove("active");

    if (
        !cartDrawer.classList.contains("active") &&
        !wishlistModal.classList.contains("active") &&
        !checkoutModal.classList.contains("active")
    ) {
        document.body.classList.remove("no-scroll");
    }
}


/* ================= CART DRAWER ================= */

function openCart() {

    cartDrawer.classList.add("active");

    cartOverlay.classList.add("active");

    document.body.classList.add("no-scroll");
}


function closeCartDrawer() {

    cartDrawer.classList.remove("active");

    cartOverlay.classList.remove("active");

    if (
        !productModal.classList.contains("active") &&
        !wishlistModal.classList.contains("active") &&
        !checkoutModal.classList.contains("active")
    ) {
        document.body.classList.remove("no-scroll");
    }
}


/* ================= WISHLIST MODAL ================= */

function openWishlist() {

    updateWishlistUI();

    wishlistModal.classList.add("active");

    document.body.classList.add("no-scroll");
}


function closeWishlist() {

    wishlistModal.classList.remove("active");

    if (
        !productModal.classList.contains("active") &&
        !cartDrawer.classList.contains("active") &&
        !checkoutModal.classList.contains("active")
    ) {
        document.body.classList.remove("no-scroll");
    }
}


/* ================= CHECKOUT ================= */

function renderCheckout() {

    checkoutItems.innerHTML = "";


    cart.forEach(item => {

        const product = getProduct(item.id);

        if (!product) return;


        const element =
            document.createElement("div");

        element.className = "checkout-item";


        element.innerHTML = `

            <div class="checkout-item-info">

                <div class="checkout-item-icon">
                    ${productImage(product, "checkout-product-img")}
                </div>

                <div>
                    <h4>${product.name}</h4>
                    <span>
                        Qty: ${item.quantity}
                    </span>
                </div>

            </div>

            <strong>
                ${formatPrice(product.price * item.quantity)}
            </strong>
        `;


        checkoutItems.appendChild(element);
    });


    const subtotal = getCartSubtotal();

    const discount = getDiscount();

    const total = subtotal - discount;


    checkoutSubtotal.textContent =
        formatPrice(subtotal);

    checkoutDiscount.textContent =
        `- ${formatPrice(discount)}`;

    checkoutTotal.textContent =
        formatPrice(total);
}


function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty. Add a product first.",
            "error"
        );

        return;
    }


    closeCartDrawer();

    renderCheckout();

    checkoutModal.classList.add("active");

    document.body.classList.add("no-scroll");
}


function closeCheckout() {

    checkoutModal.classList.remove("active");

    document.body.classList.remove("no-scroll");
}


/* ================= ORDER ================= */

function generateOrderId() {

    const randomNumber =
        Math.floor(100000 + Math.random() * 900000);

    return `NC-${randomNumber}`;
}


function placeOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        showToast(
            "Your cart is empty.",
            "error"
        );

        return;
    }


    const paymentMethod =
        document.querySelector(
            'input[name="payment"]:checked'
        );


    if (!paymentMethod) {

        showToast(
            "Please select a payment method.",
            "error"
        );

        return;
    }


    const generatedId = generateOrderId();

    orderId.textContent = generatedId;


    cart = [];

    appliedCoupon = false;

    localStorage.removeItem("novaCart");

    updateCartUI();


    checkoutForm.reset();


    checkoutModal.classList.remove("active");

    successModal.classList.add("active");


    document.body.classList.add("no-scroll");


    showToast("Order placed successfully!");
}


/* ================= COUPON ================= */

function handleCoupon() {

    const code =
        couponInput.value.trim().toUpperCase();


    if (code === "") {

        couponMessage.textContent =
            "Please enter a coupon code.";

        couponMessage.style.color =
            "#ef4444";

        return;
    }


    if (code === "NOVA50") {

        if (getCartSubtotal() === 0) {

            couponMessage.textContent =
                "Add products before applying the coupon.";

            couponMessage.style.color =
                "#ef4444";

            return;
        }


        appliedCoupon = true;


        couponMessage.textContent =
            "✓ Coupon applied — 50% discount!";

        couponMessage.style.color =
            "#16a34a";


        updateCartUI();

        if (checkoutModal.classList.contains("active")) {
            renderCheckout();
        }


        showToast("NOVA50 applied successfully!");

    } else {

        appliedCoupon = false;

        couponMessage.textContent =
            "Invalid coupon code.";

        couponMessage.style.color =
            "#ef4444";


        updateCartUI();
    }
}


/* ================= SEARCH ================= */

function handleSearch() {

    searchTerm = searchInput.value.trim();

    renderProducts();
}


function clearSearchInput() {

    searchInput.value = "";

    searchTerm = "";

    renderProducts();
}


/* ================= FILTER ================= */

function setCategory(category) {

    activeCategory = category;


    document
        .querySelectorAll(".filter-chip")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.filter === category
            );
        });


    document
        .querySelectorAll(".category-card")
        .forEach(card => {

            card.classList.toggle(
                "active",
                card.dataset.category === category
            );
        });


    renderProducts();


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* ================= NAVIGATION ================= */

function toggleMobileMenu() {

    navMenu.classList.toggle("active");


    const icon =
        menuToggle.querySelector("i");


    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");
    }
}


/* ================= EVENT LISTENERS ================= */


/* Product buttons */

productGrid.addEventListener("click", event => {

    const wishlistButton =
        event.target.closest("[data-wishlist]");

    const cartButton =
        event.target.closest("[data-cart]");


    if (wishlistButton) {

        toggleWishlist(
            wishlistButton.dataset.wishlist
        );

        return;
    }


    if (cartButton) {

        addToCart(
            cartButton.dataset.cart
        );

        return;
    }


    const card =
        event.target.closest(".product-card");


    if (card) {

        const cartTarget =
            event.target.closest("[data-cart]");

        const wishlistTarget =
            event.target.closest("[data-wishlist]");


        if (!cartTarget && !wishlistTarget) {

            const productId =
                card.querySelector("[data-cart]").dataset.cart;

            openProductModal(productId);
        }
    }
});


/* Cart controls */

cartItems.addEventListener("click", event => {

    const plusButton =
        event.target.closest("[data-cart-plus]");

    const minusButton =
        event.target.closest("[data-cart-minus]");

    const removeButton =
        event.target.closest("[data-remove-cart]");


    if (plusButton) {

        updateCartQuantity(
            plusButton.dataset.cartPlus,
            1
        );

        return;
    }


    if (minusButton) {

        updateCartQuantity(
            minusButton.dataset.cartMinus,
            -1
        );

        return;
    }


    if (removeButton) {

        removeFromCart(
            removeButton.dataset.removeCart
        );
    }
});


/* Wishlist controls */

wishlistGrid.addEventListener("click", event => {

    const addButton =
        event.target.closest("[data-wishlist-cart]");

    const removeButton =
        event.target.closest("[data-remove-wishlist]");


    if (addButton) {

        const id =
            Number(addButton.dataset.wishlistCart);

        addToCart(id);

        wishlist =
            wishlist.filter(item => item !== id);

        saveWishlist();

        updateWishlistUI();

        renderProducts();

        return;
    }


    if (removeButton) {

        const id =
            Number(removeButton.dataset.removeWishlist);

        wishlist =
            wishlist.filter(item => item !== id);

        saveWishlist();

        updateWishlistUI();

        renderProducts();

        showToast(
            "Removed from wishlist",
            "info"
        );
    }
});


/* Filter buttons */

document
    .querySelectorAll(".filter-chip")
    .forEach(button => {

        button.addEventListener("click", () => {

            setCategory(button.dataset.filter);
        });
    });


/* Category cards */

document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            setCategory(card.dataset.category);
        });
    });


/* Sorting */

document
    .getElementById("sortSelect")
    .addEventListener("change", event => {

        sortValue = event.target.value;

        renderProducts();
    });


/* Search */

searchToggle.addEventListener("click", () => {

    searchBar.classList.toggle("active");

    if (searchBar.classList.contains("active")) {

        searchInput.focus();
    }
});


searchInput.addEventListener(
    "input",
    handleSearch
);


clearSearch.addEventListener(
    "click",
    clearSearchInput
);


/* Mobile menu */

menuToggle.addEventListener(
    "click",
    toggleMobileMenu
);


/* Close menu after navigation */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");
        });
    });


/* Cart */

cartBtn.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartDrawer
);


cartOverlay.addEventListener(
    "click",
    closeCartDrawer
);


/* Wishlist */

document
    .getElementById("wishlistBtn")
    .addEventListener(
        "click",
        openWishlist
    );


/* Checkout */

document
    .getElementById("checkoutBtn")
    .addEventListener(
        "click",
        openCheckout
    );


/* Start Shopping */

document
    .getElementById("startShopping")
    .addEventListener("click", () => {

        closeCartDrawer();

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });
    });


/* Coupon */

applyCoupon.addEventListener(
    "click",
    handleCoupon
);


couponInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            event.preventDefault();

            handleCoupon();
        }
    }
);


/* Checkout form */

checkoutForm.addEventListener(
    "submit",
    placeOrder
);


/* Payment selection */

document
    .querySelectorAll(".payment-option")
    .forEach(option => {

        option.addEventListener("click", () => {

            document
                .querySelectorAll(".payment-option")
                .forEach(item =>
                    item.classList.remove("active")
                );

            option.classList.add("active");
        });
    });


/* Continue shopping */

document
    .getElementById("continueShopping")
    .addEventListener("click", () => {

        successModal.classList.remove("active");

        document.body.classList.remove("no-scroll");

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

        showToast(
            "Continue shopping",
            "info"
        );
    });


/* Promo button */

document
    .getElementById("promoShopBtn")
    .addEventListener("click", () => {

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

        setCategory("All");
    });


/* Newsletter */

document
    .getElementById("newsletterForm")
    .addEventListener("submit", event => {

        event.preventDefault();

        const email =
            event.target.querySelector("input").value;

        if (email) {

            showToast(
                "Thanks for subscribing!"
            );

            event.target.reset();
        }
    });


/* Modal close buttons */

document
    .querySelectorAll("[data-close]")
    .forEach(button => {

        button.addEventListener("click", () => {

            const modalId =
                button.dataset.close;

            document
                .getElementById(modalId)
                .classList.remove("active");

            document.body.classList.remove("no-scroll");
        });
    });


/* Close modal by clicking outside */

document
    .querySelectorAll(".modal-overlay")
    .forEach(overlay => {

        overlay.addEventListener("click", event => {

            if (event.target === overlay) {

                overlay.classList.remove("active");

                document.body.classList.remove("no-scroll");
            }
        });
    });


/* Escape key */

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;


    productModal.classList.remove("active");

    wishlistModal.classList.remove("active");

    checkoutModal.classList.remove("active");

    successModal.classList.remove("active");

    closeCartDrawer();

    document.body.classList.remove("no-scroll");
});


/* Reset filters */

document
    .getElementById("resetFilters")
    .addEventListener("click", () => {

        activeCategory = "All";

        searchTerm = "";

        sortValue = "default";

        searchInput.value = "";

        document.getElementById("sortSelect").value =
            "default";


        document
            .querySelectorAll(".filter-chip")
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.filter === "All"
                );
            });


        document
            .querySelectorAll(".category-card")
            .forEach(card => {

                card.classList.remove("active");
            });


        renderProducts();
    });


/* ================= INITIALIZE ================= */

renderProducts();

updateCartUI();

updateWishlistUI();

console.log(
    "NovaCart E-Commerce Frontend loaded successfully with product images."
);