// Buy now button click effect
document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('buy-now')) {
        alert("Product added to your cart!");
    }
});

// Load products function
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

// Page load events
window.onload = function() {
    // Initial load without auth check
    loadProducts();
};
