// Shared helpers
async function updateCartCount() {
  try {
    const r = await fetch('/api/cart');
    const { count } = await r.json();
    const el = document.getElementById('cartCount');
    if (el) el.textContent = count;
  } catch (e) {}
}
async function addToCart(id) {
  await fetch('/api/cart/' + id, { method: 'POST' });
  updateCartCount();
  alert('Added to cart!');
}
function fmt(n) { return n.toLocaleString('en-IN'); }
function cardHTML(car, featured = false) {
  return `
    <a href="/car.html?id=${car._id}" class="card${featured ? ' featured' : ''}">
      <div class="card-img" style="background-image:url('${car.image}')">
        ${featured ? '<span class="featured-badge">FEATURED</span>' : ''}
      </div>
      <div class="card-body">
        <h3>${car.brand} ${car.model}</h3>
        <p class="price">₹${fmt(car.price)}</p>
        <p class="meta">${car.year} · ${fmt(car.kmDriven || 0)} km · ${car.fuel}</p>
        <div class="tags">
          <span class="tag">${car.transmission}</span>
          <span class="tag">📍 ${car.location || ''}</span>
        </div>
      </div>
    </a>`;
}
updateCartCount();
