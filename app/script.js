// Sample data for product cards
const products = [
    {
        name: 'Product 1',
        price: 9.99,
        image: 'product1.jpg'
    },
    {
        name: 'Product 2',
        price: 19.99,
        image: 'product2.jpg'
    },
    {
        name: 'Product 3',
        price: 29.99,
        image: 'product3.jpg'
    }
];

// Function to generate product cards
function generateProductCards() {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}

// Call the function to generate product cards
generateProductCards();