const products = [
  { name: "Laptop", category: "electronics", price: 1000, rating: 4.5 },
  { name: "T-Shirt", category: "clothing", price: 20, rating: 4.0 },
  { name: "Smartphone", category: "electronics", price: 800, rating: 4.7 },
  { name: "Jeans", category: "clothing", price: 40, rating: 4.2 }
];

function renderProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<strong>${p.name}</strong><br>Price: $${p.price}<br>Rating: ${p.rating}`;
    container.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  let filtered = category === "all" ? products : products.filter(p => p.category === category);
  renderProducts(filtered);
}

function sortProducts() {
  const sortBy = document.getElementById("sortOption").value;
  let sorted = [...products].sort((a, b) => a[sortBy] - b[sortBy]);
  renderProducts(sorted);
}

renderProducts(products);
