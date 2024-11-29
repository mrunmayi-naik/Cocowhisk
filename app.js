// // Example product data
// const products = [
//     // { name: "Product 1", image: "images/product1.jpg" },
//     { name: "Product 2"},
//     { name: "Product 2", image: "images/product2.jpg", link:"product3.html" },
//     { name: "Product 3", image: "images/product3.jpg", link:"product4.html" },
//     { name: "Scarlet Bite", image: "images/product1.jpg" },
//     { name: "Product 4", image: "images/product4.jpg" },
//     { name: "Product 5", image: "images/product5.jpg" },
// ];

// // Function to search products based on input
// function searchProducts() {
//     const searchInput = document.getElementById("search-input").value.toLowerCase();
//     const productList = document.getElementById("product-list");

//     // Show product list container when user starts typing
//     if (searchInput.length > 0) {
//         productList.style.display = "flex"; // Show the product list // <img src="${product.image}" alt="${product.name}">
//     } else {
//         productList.style.display = "none"; // Hide product list when input is empty
//     }

//     // Clear the existing product list
//     productList.innerHTML = "";

//     // Filter products based on the search query
//     const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));

//     // Display filtered products
//     if (filteredProducts.length > 0) {
//         filteredProducts.forEach(product => {
//             const productCard = document.createElement("div");
//             productCard.classList.add("product-card");

//             productCard.innerHTML = `
//                 <a href={product.link}></a>
//                 <h3>${product.name}</h3>
//             `;
//             productList.appendChild(productCard);
//         });
//     } else {
//         const noProductsMessage = document.createElement("div");
//         noProductsMessage.classList.add("no-products");
//         noProductsMessage.textContent = "No products found";
//         productList.appendChild(noProductsMessage);
//     }

//     // Show the clear icon if there's any input
//     const clearIcon = document.getElementById("clear-icon");
//     if (searchInput) {
//         clearIcon.style.display = "block";
//     } else {
//         clearIcon.style.display = "none";
//     }
// }

// // Clear the search input and hide products
// function clearSearch() {
//     document.getElementById("search-input").value = "";
//     searchProducts(); // Re-run the searchProducts function to hide the results
// }


const products = [
    { name: "Scarlet Bite", image: "images/product1.jpg", link:"product1.html" },
    { name: "Spectrum of Affection", image: "images/product2.jpg", link: "product2.html" },
    { name: "Shimmering Sweethearts", image: "images/product3.jpg", link: "product3.html" },
    { name: "Sweet Ember", image: "images/product4.jpg", link: "product4.html" },
    { name: "Elegance Assortment", image: "images/product5.jpg", link: "product5.html" },
    { name: "Eclipse Truffles", image: "images/product6.jpg", link: "product6.html" },
    { name: "Assorted Delights", image: "images/product8.jpg", link: "product7.html" },
    { name: "Moonlit Cocoa", image: "images/product9.jpg", link: "product8.html" },
    { name: "Golden Indulgence", image: "images/product10.jpg", link: "product9.html" },
];

function searchProducts() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const productList = document.getElementById("product-list");

    // Show product list container when user starts typing
    if (searchInput.length > 0) {
        productList.style.display = "flex"; // Show the product list
    } else {
        productList.style.display = "none"; // Hide product list when input is empty
    }

    // Clear the existing product list
    productList.innerHTML = "";

    // Filter products based on the search query
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    );

    // Display filtered products
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <a href="${product.link}">
                    
                    <h3>${product.name}</h3>
                </a>
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

function clearSearch() {
    document.getElementById("search-input").value = "";
    searchProducts(); // Re-run the searchProducts function to hide the results
}

// ${product.image ? `<img src="${product.image}" alt="${product.name}">` : ""} add this in productinnerhtml when u need image to be display