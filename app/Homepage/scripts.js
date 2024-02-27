const products = [
    { name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { name: 'Product 3', price: '$15', image: 'https://via.placeholder.com/150' },
    { name: 'Product 4', price: '$25', image: 'https://via.placeholder.com/150' },
    { name: 'Product 5', price: '$30', image: 'https://via.placeholder.com/150' }
];

// Function to create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    `;
    return card;
}

// Function to display product cards
function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

// Display initial products
displayProducts(products);