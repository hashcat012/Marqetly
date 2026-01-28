// Buy now button click effect
document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('buy-now')) {
        alert("Product added to your cart!");
    }
});

// Wishlist heart click
document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('wishlist-heart')) {
        e.stopPropagation();
        e.target.classList.toggle('active');
        if(e.target.classList.contains('active')) {
            alert("Added to wishlist!");
        } else {
            alert("Removed from wishlist!");
        }
    }
});

// Load products function with wishlist hearts
function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    const container = document.getElementById('productGrid');
    if(container) {
        container.innerHTML = '';
        
        if(products.length === 0) {
            container.innerHTML = '<p style="color: #64748b; grid-column: 1/-1; font-size: 1.2rem;">No products available yet.</p>';
            return;
        }
        
        products.forEach(product => {
            container.innerHTML += `
                <div class="product-card" onclick="viewProduct(${product.id})">
                    <button class="wishlist-heart">♡</button>
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>
                    <button class="buy-now">Buy Now</button>
                </div>
            `;
        });
    }
}

function viewProduct(productId) {
    localStorage.setItem('currentProductId', productId);
    window.location.href = 'product-detail.html';
}

// Toggle sidebar function
function toggleSidebar() {
    const sidebar = document.getElementById('profileSidebar');
    if(sidebar.style.right === '0px') {
        sidebar.style.right = '-350px';
    } else {
        sidebar.style.right = '0px';
    }
}

// Close sidebar when clicking outside
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('profileSidebar');
    if(sidebar.style.right === '0px' && !e.target.closest('.sidebar') && !e.target.closest('#authLink')) {
        sidebar.style.right = '-350px';
    }
});

// Theme change function
function changeTheme(theme) {
    // Remove active class from all theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // Add active class to clicked button
    event.target.classList.add('active');
    // Theme change logic would go here
    console.log('Theme changed to:', theme);
}

// Menu functions
function showOrders(e) {
    e.preventDefault();
    alert('No orders yet. Start shopping!');
}

function showWishlist(e) {
    e.preventDefault();
    alert('Your wishlist is empty.');
}

function showSettings(e) {
    e.preventDefault();
    alert('Settings page - Sign out option available below.');
}

// Sign out function
function signOut() {
    // This would normally sign out from Firebase
    alert('Signing out...');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Page load events
window.onload = function() {
    // Initial load without auth check
    loadProducts();
};
