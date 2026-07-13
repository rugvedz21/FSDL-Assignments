async function loadHome() {
  const params = new URLSearchParams();
  const search = document.getElementById('searchInput').value;
  const brand = document.getElementById('filterBrand').value;
  const fuel = document.getElementById('filterFuel').value;
  const sort = document.getElementById('filterSort').value;
  if (search) params.set('search', search);
  if (brand) params.set('brand', brand);
  if (fuel) params.set('fuel', fuel);
  if (sort) params.set('sort', sort);

  const cars = await fetch('/api/cars?' + params).then(r => r.json());
  document.getElementById('carCount').textContent = cars.length;
  document.getElementById('carGrid').innerHTML = cars.map(c => cardHTML(c)).join('');
  document.getElementById('emptyState').style.display = cars.length ? 'none' : 'block';
}

async function loadFeatured() {
  const featured = await fetch('/api/cars/featured').then(r => r.json());
  document.getElementById('featuredGrid').innerHTML = featured.map(c => cardHTML(c, true)).join('');
}

async function loadBrands() {
  const brands = await fetch('/api/cars/brands').then(r => r.json());
  const sel = document.getElementById('filterBrand');
  brands.forEach(b => sel.innerHTML += `<option>${b}</option>`);
}

document.getElementById('searchForm').addEventListener('submit', e => { e.preventDefault(); loadHome(); });
['filterBrand', 'filterFuel', 'filterSort'].forEach(id =>
  document.getElementById(id).addEventListener('change', loadHome));

loadBrands();
loadFeatured();
loadHome();
