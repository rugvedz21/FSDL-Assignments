const id = new URLSearchParams(location.search).get('id');

(async () => {
  if (!id) { location.href = '/'; return; }
  const { car, similar } = await fetch('/api/cars/' + id).then(r => r.json());

  document.getElementById('detail').innerHTML = `
    <div class="detail-img" style="background-image:url('${car.image}')"></div>
    <div class="detail-info">
      <h1>${car.brand} ${car.model}</h1>
      <p class="price big">₹${fmt(car.price)}</p>
      <div class="specs">
        <div class="spec"><span>Year</span><b>${car.year}</b></div>
        <div class="spec"><span>KM Driven</span><b>${fmt(car.kmDriven || 0)}</b></div>
        <div class="spec"><span>Fuel</span><b>${car.fuel}</b></div>
        <div class="spec"><span>Trans.</span><b>${car.transmission}</b></div>
        <div class="spec"><span>Color</span><b>${car.color || '-'}</b></div>
        <div class="spec"><span>Location</span><b>${car.location || '-'}</b></div>
      </div>
      <p class="desc">${car.description || ''}</p>
      <div class="actions">
        <button class="btn btn-secondary" onclick="addToCart('${car._id}')">🛒 Add to Cart</button>
        <a href="#book" class="btn btn-primary">📅 Book Test Drive</a>
        <button class="btn btn-danger" onclick="deleteCar('${car._id}')">🗑️ Delete</button>
      </div>
    </div>`;

  document.getElementById('similarGrid').innerHTML = similar.map(c => cardHTML(c)).join('');

  document.getElementById('bookingForm').addEventListener('submit', async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.car = car._id;
    await fetch('/api/bookings', {
      method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)
    });
    alert('✅ Booking confirmed! We will contact you shortly.');
    location.href = '/bookings.html';
  });
})();

async function deleteCar(id) {
  if (!confirm('Delete this car?')) return;
  await fetch('/api/cars/' + id, { method: 'DELETE' });
  location.href = '/';
}
