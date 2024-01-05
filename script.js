async function login() {
  // ... (your login logic)

  // Redirect to the product list page
  window.location.href = 'product-list.html';
}

function searchProducts() {
  // ... (your search logic)

  // Update product cards dynamically (example)
  const productCards = document.getElementById('productCards');
  productCards.innerHTML = '<div class="product-card"><h3>Product Name</h3></div>';
}

function goBack() {
  // Redirect back to the login page
  window.location.href = 'login.html';
}
const crypto = require('crypto');

const data = 'your_data_here';
const hash = crypto.createHash('sha256').update(data).digest('hex');

console.log(hash);
  