let products = [
  { name: "Shirt", price: 25, category: "Clothing", available: true, Imagepath :"6c666bda-3b10-4448-bccf-c218879742911718016802144-Allen-Solly-Men-Shirts-6571718016801622-1.jpg" },
  { name: "Shoes", price: 50, category: "Clothing", available: false, Imagepath :"Shoes.avif" },
  { name: "Smartphone", price: 700, category: "Electronics", available: true, Imagepath :"google-pixel-9-pro-66d5e04002b15.jpg" },
  { name: "Laptop", price: 1000, category: "Electronics", available: true, Imagepath :"laptop.jpg" },
  { name: "Fridge", price: 500, category: "Home Appliances", available: false, Imagepath :"Fridge.jpg" },
  { name: "Washing Machine", price: 300, category: "Home Appliances", available: true , Imagepath :"Washing Machine.jpeg" }
];

// Display products on the page
function displayProducts(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Clear the previous products

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
   <img src="${product.Imagepath}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
      <p>Availability: ${product.available ? "In Stock" : "Out of Stock"}</p>
    `;

    productList.appendChild(productDiv);
  });
}

// Filter products based on user input
function filterProducts() {
  let minPrice = document.getElementById("minPrice").value;
  let maxPrice = document.getElementById("maxPrice").value;
  let category = document.getElementById("category").value;
  let availability = document.getElementById("availability").value;

  // Convert minPrice and maxPrice to numbers
  minPrice = minPrice ? parseInt(minPrice) : 0;
  maxPrice = maxPrice ? parseInt(maxPrice) : Infinity;
  availability = availability ? availability === "true" : undefined;

  let filteredProducts = products.filter(product => {
    return (
      product.price >= minPrice &&
      product.price <= maxPrice &&
      (category ? product.category === category : true) &&
      (availability !== undefined ? product.available === availability : true)
    );
  });

  displayProducts(filteredProducts);
}

// Clear filters and reset product list
function clearFilters() {
  document.getElementById("minPrice").value = "";
  document.getElementById("maxPrice").value = "";
  document.getElementById("category").value = "";
  document.getElementById("availability").value = "";
  displayProducts(products); // Reset to original product list
}

// Event listeners for filter and clear buttons
document.getElementById("filterBtn").addEventListener("click", filterProducts);
document.getElementById("clearBtn").addEventListener("click", clearFilters);

// Display all products initially
displayProducts(products);
