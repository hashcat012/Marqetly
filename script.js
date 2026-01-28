// Hemen satın al butonuna tıklama efekti
document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('buy-now')) {
        alert("Ürün sepetinize eklendi!");
    }
});

// Sayfa yüklendiğinde animasyon başlat
window.addEventListener("load", function() {
    document.querySelector(".hero").classList.add("fade-in");
});

// Ürünleri yükle
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
                    <p>₺${product.price}</p>
                    <button class="buy-now">Hemen Satın Al</button>
                </div>
            `;
        });
    }
}

function viewProduct(productId) {
    localStorage.setItem('currentProductId', productId);
    window.location.href = 'product-detail.html';
}

// Sayfa yüklendiğinde ürünleri yükle
window.onload = function() {
    loadProducts();
};
