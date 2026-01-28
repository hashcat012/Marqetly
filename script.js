// Buy now button click effect
document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('buy-now')) {
        alert("Product added to your cart!");
    }
});

// Load products when page loads
function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    const container = document.getElementById('productGrid');
    if(container) {
        container.innerHTML = '';
        
        products.forEach(product => {
            container.innerHTML += `
                <div class="product-card" onclick="viewProduct(${product.id})">
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

// Check user authentication status
function checkAuthStatus() {
    // This would normally check Firebase auth state
    // For demo purposes, we'll just hide/show auth link based on localStorage
    const authLink = document.getElementById('authLink');
    if(authLink) {
        // In real implementation, check Firebase auth state
        // For now, always show Sign Up button
        authLink.textContent = 'Sign Up';
        authLink.href = 'auth.html';
    }
}

// Page load events
window.onload = function() {
    loadProducts();
    checkAuthStatus();
    
    // Check if user is admin for edit button
    const editSection = document.getElementById('editProductsSection');
    if(editSection) {
        // In real implementation, check if user is admin via Firebase
        // For demo, show edit button
        editSection.style.display = 'block';
    }
};
