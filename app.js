// Example product data
const products = [
    // { name: "Product 1", image: "images/product1.jpg" },
    { name: "Product 2"},
    { name: "Product 2", image: "images/product2.jpg" },
    { name: "Product 3", image: "images/product3.jpg" },
    { name: "Scarlet Bite", image: "images/product1.jpg" },
    { name: "Product 4", image: "images/product4.jpg" },
    { name: "Product 5", image: "images/product5.jpg" },
];

// Function to search products based on input
function searchProducts() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const productList = document.getElementById("product-list");

    // Show product list container when user starts typing
    if (searchInput.length > 0) {
        productList.style.display = "flex"; // Show the product list // <img src="${product.image}" alt="${product.name}">
    } else {
        productList.style.display = "none"; // Hide product list when input is empty
    }

    // Clear the existing product list
    productList.innerHTML = "";

    // Filter products based on the search query
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));

    // Display filtered products
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
               
                <h3>${product.name}</h3>
            `;
            productList.appendChild(productCard);
        });
    } else {
        const noProductsMessage = document.createElement("div");
        noProductsMessage.classList.add("no-products");
        noProductsMessage.textContent = "No products found";
        productList.appendChild(noProductsMessage);
    }

    // Show the clear icon if there's any input
    const clearIcon = document.getElementById("clear-icon");
    if (searchInput) {
        clearIcon.style.display = "block";
    } else {
        clearIcon.style.display = "none";
    }
}

// Clear the search input and hide products
function clearSearch() {
    document.getElementById("search-input").value = "";
    searchProducts(); // Re-run the searchProducts function to hide the results
}
