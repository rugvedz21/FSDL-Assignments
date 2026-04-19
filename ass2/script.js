// ══════════════════════════════════════
// DATA
// ══════════════════════════════════════
const SONGS = [
  {id:1,  name:"God's Plan",           artist:"Drake",                   album:"Scorpion",                dur:"3:18", grad:"linear-gradient(135deg,#1a1035,#3d2b7a)", abbr:"GP"},
  {id:2,  name:"HUMBLE.",              artist:"Kendrick Lamar",          album:"DAMN.",                   dur:"2:57", grad:"linear-gradient(135deg,#0f2027,#2c5364)",  abbr:"HU"},
  {id:3,  name:"Sicko Mode",           artist:"Travis Scott",            album:"ASTROWORLD",              dur:"5:12", grad:"linear-gradient(135deg,#7b2d00,#c94b00)",  abbr:"SM"},
  {id:4,  name:"ROCKSTAR",             artist:"DaBaby ft. Roddy Ricch",  album:"BLAME IT ON BABY",        dur:"3:01", grad:"linear-gradient(135deg,#1a001e,#4a0060)",  abbr:"RS"},
  {id:5,  name:"Money In The Grave",   artist:"Drake ft. Rick Ross",     album:"Care Package",            dur:"3:34", grad:"linear-gradient(135deg,#0d3320,#1a6640)",  abbr:"MG"},
  {id:6,  name:"Lucid Dreams",         artist:"Juice WRLD",              album:"Goodbye & Good Riddance", dur:"3:59", grad:"linear-gradient(135deg,#1a0050,#4b0082)",  abbr:"LD"},
  {id:7,  name:"Mo Bamba",             artist:"Sheck Wes",               album:"Mudboy",                  dur:"3:42", grad:"linear-gradient(135deg,#001a4d,#0033cc)",  abbr:"MB"},
  {id:8,  name:"A$AP Forever",         artist:"A$AP Rocky",              album:"Testing",                 dur:"4:08", grad:"linear-gradient(135deg,#0a0010,#2d0050)",  abbr:"AF"},
  {id:9,  name:"Savage",               artist:"Megan Thee Stallion",     album:"Suga",                    dur:"3:02", grad:"linear-gradient(135deg,#4d1a00,#cc4400)",  abbr:"SV"},
  {id:10, name:"Rich Flex",            artist:"Drake & 21 Savage",       album:"Her Loss",                dur:"3:45", grad:"linear-gradient(135deg,#1a1a1a,#3a3a3a)",  abbr:"RF"},
  {id:11, name:"Knife Talk",           artist:"Drake ft. 21 Savage",     album:"Certified Lover Boy",     dur:"3:29", grad:"linear-gradient(135deg,#002033,#004466)",  abbr:"KT"},
  {id:12, name:"Laugh Now Cry Later",  artist:"Drake ft. Lil Durk",      album:"Certified Lover Boy",     dur:"4:14", grad:"linear-gradient(135deg,#003322,#006644)",  abbr:"LN"},
  {id:13, name:"Life Is Good",         artist:"Future ft. Drake",        album:"High Off Life",           dur:"3:57", grad:"linear-gradient(135deg,#1a3300,#336600)",  abbr:"LG"},
  {id:14, name:"Blinding Lights",      artist:"The Weeknd",              album:"After Hours",             dur:"3:20", grad:"linear-gradient(135deg,#330000,#660000)",  abbr:"BL"},
  {id:15, name:"Family Portrait",      artist:"Polo G",                  album:"Hall of Fame",            dur:"3:58", grad:"linear-gradient(135deg,#111111,#333333)",  abbr:"FP"},
  {id:16, name:"Essence",              artist:"Wizkid ft. Tems",         album:"Made In Lagos",           dur:"4:02", grad:"linear-gradient(135deg,#331a00,#663300)",  abbr:"ES"},
  {id:17, name:"MONTERO",              artist:"Lil Nas X",               album:"MONTERO",                 dur:"2:17", grad:"linear-gradient(135deg,#1a0030,#500080)",  abbr:"MO"},
  {id:18, name:"Jumpman",              artist:"Drake & Future",          album:"What A Time To Be Alive", dur:"3:15", grad:"linear-gradient(135deg,#001a33,#003366)",  abbr:"JM"},
];

const ALBUMS = [
  {id:"a1", name:"DAMN.",                   artist:"Kendrick Lamar",    year:2017, tracks:14, dur:"46 min", grad:"linear-gradient(135deg,#0f2027,#2c5364)",  abbr:"DM"},
  {id:"a2", name:"ASTROWORLD",              artist:"Travis Scott",      year:2018, tracks:17, dur:"64 min", grad:"linear-gradient(135deg,#7b2d00,#c94b00)",  abbr:"AW"},
  {id:"a3", name:"Scorpion",                artist:"Drake",             year:2018, tracks:25, dur:"89 min", grad:"linear-gradient(135deg,#1a1035,#3d2b7a)",  abbr:"SC"},
  {id:"a4", name:"Testing",                 artist:"A$AP Rocky",       year:2018, tracks:15, dur:"52 min", grad:"linear-gradient(135deg,#0a0010,#2d0050)",  abbr:"TS"},
  {id:"a5", name:"Goodbye & Good Riddance", artist:"Juice WRLD",       year:2018, tracks:12, dur:"37 min", grad:"linear-gradient(135deg,#1a0050,#4b0082)",  abbr:"GG"},
  {id:"a6", name:"Her Loss",                artist:"Drake & 21 Savage", year:2022, tracks:16, dur:"55 min", grad:"linear-gradient(135deg,#1a1a1a,#3a3a3a)",  abbr:"HL"},
];

const ARTISTS = [
  {name:"Drake",          songs:98, grad:"linear-gradient(135deg,#1a1035,#c94b4b)", abbr:"DR"},
  {name:"Kendrick Lamar", songs:67, grad:"linear-gradient(135deg,#0f2027,#2c5364)", abbr:"KL"},
  {name:"Travis Scott",   songs:54, grad:"linear-gradient(135deg,#7b2d00,#c94b00)", abbr:"TS"},
  {name:"Juice WRLD",     songs:89, grad:"linear-gradient(135deg,#1a0050,#4b0082)", abbr:"JW"},
  {name:"A$AP Rocky",     songs:43, grad:"linear-gradient(135deg,#0a0010,#2d0050)", abbr:"AR"},
  {name:"21 Savage",      songs:51, grad:"linear-gradient(135deg,#1a1a1a,#3a3a3a)", abbr:"21"},
];

const PLAYLISTS = [
  {name:"Liked Songs",      count:18, grad:"linear-gradient(135deg,#450af5,#8e24aa)", abbr:"LS"},
  {name:"Rap God Mode",     count:12, grad:"linear-gradient(135deg,#7b2d00,#c94b00)", abbr:"RG"},
  {name:"Late Night Drive", count:9,  grad:"linear-gradient(135deg,#0a0010,#2d0050)", abbr:"LN"},
  {name:"Workout Bangers",  count:15, grad:"linear-gradient(135deg,#0f2027,#2c5364)", abbr:"WB"},
];

// ══════════════════════════════════════
// STATE
// ══════════════════════════════════════
const S = {
  idx: -1,
  queue: [...SONGS],
  history: [],
  playing: false,
  shuffle: false,
  repeat: false,
  volume: 0.7,
  liked: new Set(),
  local: [],
  tab: 'queue',
};

let simTimer = null;
const audio = document.getElementById('audio');
audio.volume = S.volume;

// ══════════════════════════════════════
// CURSOR GLOW
// ══════════════════════════════════════
const cursorGlow = document.getElementById('cursor-glow');
let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
function animateCursor() {
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;
  cursorGlow.style.left = glowX + 'px';
  cursorGlow.style.top  = glowY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ══════════════════════════════════════
// TOAST
// ══════════════════════════════════════
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

// ══════════════════════════════════════
// SCROLL REVEAL — IntersectionObserver
// ══════════════════════════════════════
function initScrollReveal() {
  // Reveal hero elements on load
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal-fade, .hero .reveal-slide').forEach((el, i) => {
      setTimeout(() => el.classList.add('revealed'), i * 120);
    });
  }, 80);

  // Featured banner
  setTimeout(() => {
    const feat = document.querySelector('.featured');
    if (feat) feat.classList.add('reveal-fade');
  }, 0);

  // Observer for sections and cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('revealed');

      // If it's a section, stagger the children cards
      if (el.classList.contains('reveal-section')) {
        const cards = el.querySelectorAll('.card');
        cards.forEach((card, i) => {
          card.classList.add('reveal-card');
          setTimeout(() => card.classList.add('revealed'), 60 + i * 55);
        });
      }
      observer.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-section, .featured').forEach(el => {
    observer.observe(el);
  });

  return observer;
}

let revealObserver;

// ══════════════════════════════════════
// TOPBAR SCROLL BEHAVIOR
// ══════════════════════════════════════
const mainEl = document.getElementById('main-scroll');
const topbar = document.getElementById('topbar');
mainEl.addEventListener('scroll', () => {
  topbar.classList.toggle('scrolled', mainEl.scrollTop > 20);
}, { passive: true });

// ══════════════════════════════════════
// RENDER — Sidebar Playlists
// ══════════════════════════════════════
function renderPlaylists() {
  document.getElementById('playlists').innerHTML = PLAYLISTS.map((p, i) => `
    <div class="pl-item" style="opacity:0;transform:translateX(-14px);transition:all 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 70}ms">
      <div class="pl-cover" style="background:${p.grad}">${p.abbr}</div>
      <div class="pl-info">
        <div class="pl-name">${p.name}</div>
        <div class="pl-meta">Playlist · ${p.count} songs</div>
      </div>
    </div>
  `).join('');

  // Animate in
  setTimeout(() => {
    document.querySelectorAll('.pl-item').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }, 200);
}

// ══════════════════════════════════════
// RENDER — Home
// ══════════════════════════════════════
function renderHome() {
  // Featured album
  const f = ALBUMS[0];
  const fa = document.getElementById('feat-art');
  fa.textContent = f.abbr;
  fa.style.background = f.grad;
  document.getElementById('feat-title').textContent = f.name;
  document.getElementById('feat-sub').textContent   = `${f.artist} · ${f.year}`;
  document.getElementById('feat-tags').innerHTML = `
    <span class="feat-tag"><i class="fa-solid fa-music"></i>${f.tracks} tracks</span>
    <span class="feat-tag"><i class="fa-solid fa-clock"></i>${f.dur}</span>
    <span class="feat-tag"><i class="fa-solid fa-fire"></i>Gold Record</span>`;
  document.getElementById('featured-el').onclick = () => playSong(2);
  document.getElementById('feat-play-btn').onclick = (e) => { e.stopPropagation(); playSong(2); };

  // Trending grid
  document.getElementById('trending-grid').innerHTML = SONGS.slice(0, 6).map(s => `
    <div class="card" onclick="playSong(${s.id})">
      <div class="card-art">
        <div class="card-art-inner" style="background:${s.grad}">${s.abbr}</div>
        <button class="c-play" onclick="event.stopPropagation();playSong(${s.id})">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
      <div class="c-name">${s.name}</div>
      <div class="c-sub">${s.artist}</div>
    </div>
  `).join('');

  // Albums grid
  document.getElementById('albums-grid').innerHTML = ALBUMS.map(a => `
    <div class="card" onclick="playAlbum('${a.id}')">
      <div class="card-art">
        <div class="card-art-inner" style="background:${a.grad}">${a.abbr}</div>
        <button class="c-play" onclick="event.stopPropagation();playAlbum('${a.id}')">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
      <div class="c-name">${a.name}</div>
      <div class="c-sub">${a.artist} · ${a.year}</div>
    </div>
  `).join('');

  // Artists grid — circular
  document.getElementById('artists-grid').innerHTML = ARTISTS.map(a => `
    <div class="card">
      <div class="card-art">
        <div class="card-art-inner" style="background:${a.grad};border-radius:50%">${a.abbr}</div>
        <button class="c-play"><i class="fa-solid fa-play"></i></button>
      </div>
      <div class="c-name">${a.name}</div>
      <div class="c-sub">${a.songs} songs</div>
    </div>
  `).join('');

  // Initialize scroll reveal after DOM is ready
  setTimeout(() => {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = initScrollReveal();
  }, 50);
}

// ══════════════════════════════════════
// PLAYBACK
// ══════════════════════════════════════
function playSong(id) {
  const idx = S.queue.findIndex(s => s.id === id);
  if (idx === -1) return;
  loadAndPlay(idx);
}

function playAlbum(aid) {
  const album = ALBUMS.find(a => a.id === aid);
  if (!album) return;
  const song = SONGS.find(s => s.album === album.name);
  if (song) playSong(song.id);
  else loadAndPlay(0);
}

function loadAndPlay(qi) {
  if (qi < 0 || qi >= S.queue.length) return;
  if (S.idx >= 0) {
    S.history.push(S.idx);
    if (S.history.length > 50) S.history.shift();
  }
  S.idx = qi;
  const s = S.queue[qi];

  // Player bar with animated cover swap
  const cov = document.getElementById('p-cover');
  cov.style.transform = 'scale(0.85)';
  cov.style.opacity = '0';
  setTimeout(() => {
    cov.style.background = s.grad;
    cov.textContent = s.abbr;
    cov.style.transition = 'transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s, background 0.3s';
    cov.style.transform = 'scale(1)';
    cov.style.opacity = '1';
  }, 150);

  // Animate song name change
  const nameEl = document.getElementById('p-name');
  const artistEl = document.getElementById('p-artist');
  nameEl.style.opacity = '0'; nameEl.style.transform = 'translateY(6px)';
  artistEl.style.opacity = '0';
  setTimeout(() => {
    nameEl.textContent = s.name;
    artistEl.textContent = s.artist;
    nameEl.style.transition = 'opacity 0.3s, transform 0.3s';
    artistEl.style.transition = 'opacity 0.3s';
    nameEl.style.opacity = '1'; nameEl.style.transform = 'none';
    artistEl.style.opacity = '1';
  }, 140);

  document.getElementById('p-tot').textContent = s.dur;
  document.getElementById('p-cur').textContent = '0:00';
  document.getElementById('p-fill').style.width = '0%';
  document.getElementById('player-prog-line').style.width = '0%';

  // Like state
  const liked = S.liked.has(s.id);
  document.getElementById('p-like').classList.toggle('on', liked);
  document.querySelector('#p-like i').className = liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';

  S.playing = true;
  document.querySelector('#p-play i').className = 'fa-solid fa-pause';
  cov.classList.add('playing');

  if (s.isLocal && s.url) {
    audio.src = s.url;
    audio.play();
  } else {
    audio.src = '';
    simStart(s.dur);
  }

  showToast(`▶ ${s.name}`);
  renderQueue();
}

function simStart(dur) {
  clearInterval(simTimer);
  const [m, sec] = dur.split(':').map(Number);
  const total = m * 60 + sec;
  let el = 0;
  simTimer = setInterval(() => {
    if (!S.playing) return;
    el++;
    if (el >= total) { clearInterval(simTimer); onEnd(); return; }
    const pct = (el / total) * 100;
    document.getElementById('p-fill').style.width = pct + '%';
    document.getElementById('player-prog-line').style.width = pct + '%';
    const cm = Math.floor(el / 60), cs = el % 60;
    document.getElementById('p-cur').textContent = `${cm}:${cs < 10 ? '0' : ''}${cs}`;
    // Move p-thumb
    const bar = document.getElementById('p-bar');
    const thumb = bar.querySelector('.p-thumb');
    thumb.style.left = pct + '%';
    thumb.style.right = 'auto';
  }, 1000);
}

function onEnd() {
  if (S.repeat) loadAndPlay(S.idx);
  else playNext();
}

function togglePlay() {
  if (S.idx === -1) { loadAndPlay(0); return; }
  S.playing = !S.playing;
  document.querySelector('#p-play i').className = S.playing ? 'fa-solid fa-pause' : 'fa-solid fa-play';
  const cov = document.getElementById('p-cover');
  if (S.playing) cov.classList.add('playing');
  else cov.classList.remove('playing');

  const s = S.queue[S.idx];
  if (s.isLocal && s.url) {
    S.playing ? audio.play() : audio.pause();
  } else {
    if (!S.playing) clearInterval(simTimer);
    else simStart(s.dur);
  }
}

function playNext() {
  if (!S.queue.length) return;
  const n = S.shuffle
    ? Math.floor(Math.random() * S.queue.length)
    : (S.idx + 1) % S.queue.length;
  loadAndPlay(n);
}

function playPrev() {
  if (S.history.length > 0) loadAndPlay(S.history.pop());
  else loadAndPlay(Math.max(0, S.idx - 1));
}

// ══════════════════════════════════════
// QUEUE
// ══════════════════════════════════════
function renderQueue() {
  const body = document.getElementById('q-body');
  let html = '';

  if (S.tab === 'queue') {
    const cur = S.queue[S.idx];
    const nxt = S.queue.slice(S.idx + 1, S.idx + 11);
    if (cur) html += `<span class="q-section-label">Now Playing</span>${qTrack(cur, true)}`;
    if (nxt.length) {
      html += `<span class="q-section-label">Next Up</span>`;
      nxt.forEach((s, i) => { html += qTrack(s, false, S.idx + 1 + i); });
    }
    if (!html) html = emptyQ('Your queue is empty');
  } else {
    const hist = [...S.history].reverse().slice(0, 10);
    if (hist.length) {
      html = `<span class="q-section-label">Recently Played</span>`;
      hist.forEach(i => { html += qTrack(S.queue[i], false, i); });
    } else {
      html = emptyQ('Nothing played yet');
    }
  }

  body.innerHTML = html;
  body.querySelectorAll('.q-track[data-i]').forEach(el =>
    el.addEventListener('click', () => loadAndPlay(+el.dataset.i))
  );
}

function qTrack(s, now, i) {
  return `
    <div class="q-track ${now ? 'now' : ''}" ${i !== undefined ? `data-i="${i}"` : ''}>
      <div class="q-art" style="background:${s.grad}">${s.abbr}</div>
      <div class="q-info">
        <div class="q-name ${now ? 'now' : ''}">${s.name}</div>
        <div class="q-artist">${s.artist}</div>
      </div>
      ${now
        ? '<div class="eq"><span></span><span></span><span></span></div>'
        : `<div class="q-dur">${s.dur}</div>`}
    </div>`;
}

function emptyQ(msg) {
  return `<div class="q-empty"><i class="fa-solid fa-music"></i><p>${msg}</p></div>`;
}

// ══════════════════════════════════════
// SEARCH
// ══════════════════════════════════════
function doSearch(q) {
  const lbl  = document.getElementById('search-lbl');
  const list = document.getElementById('result-list');
  if (!q.trim()) { lbl.textContent = 'Type to search...'; list.innerHTML = ''; return; }

  const hits = SONGS.filter(s =>
    s.name.toLowerCase().includes(q)   ||
    s.artist.toLowerCase().includes(q) ||
    s.album.toLowerCase().includes(q)
  );

  lbl.textContent = hits.length
    ? `${hits.length} result${hits.length > 1 ? 's' : ''} for "${q}"`
    : `No results for "${q}"`;

  const cur = S.idx >= 0 ? S.queue[S.idx] : null;
  list.innerHTML = hits.map((s, i) => `
    <div class="r-row ${cur && cur.id === s.id ? 'now' : ''}" data-id="${s.id}"
         style="opacity:0;transform:translateY(10px);transition:all 0.3s cubic-bezier(0.16,1,0.3,1) ${i * 40}ms">
      <div class="r-num">${cur && cur.id === s.id
        ? '<i class="fa-solid fa-volume-high" style="font-size:11px;color:var(--accent)"></i>'
        : i + 1}</div>
      <div class="r-art" style="background:${s.grad}">${s.abbr}</div>
      <div class="r-info">
        <div class="r-name">${s.name}</div>
        <div class="r-artist">${s.artist}</div>
      </div>
      <div class="r-album">${s.album}</div>
      <div class="r-dur">${s.dur}</div>
      <button class="r-add" title="Add to queue"><i class="fa-solid fa-circle-plus"></i></button>
    </div>
  `).join('');

  // Stagger animate in
  setTimeout(() => {
    list.querySelectorAll('.r-row').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }, 10);

  list.querySelectorAll('.r-row').forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.closest('.r-add')) return;
      playSong(+row.dataset.id);
      doSearch(q);
    });
    row.querySelector('.r-add').addEventListener('click', e => {
      e.stopPropagation();
      const song = SONGS.find(x => x.id === +row.dataset.id);
      if (song && !S.queue.find(x => x.id === song.id)) {
        S.queue.push(song);
        renderQueue();
        showToast(`Added "${song.name}" to queue`);
      }
    });
  });
}

// ══════════════════════════════════════
// LOCAL FILES
// ══════════════════════════════════════
function addFiles(files) {
  Array.from(files).forEach(f => {
    const track = {
      id: Date.now() + Math.random(),
      name: f.name.replace(/\.[^.]+$/, ''),
      artist: 'Local File',
      album: 'My Library',
      dur: '?:??',
      grad: 'linear-gradient(135deg,#7c6fff,#ff5e7e)',
      abbr: 'LC',
      url: URL.createObjectURL(f),
      isLocal: true,
      fileSize: f.size,
    };
    S.local.push(track);
    S.queue.push(track);
    showToast(`Uploaded "${track.name}"`);
  });
  renderLocal();
  updateLocalStats();
}

function renderLocal() {
  const list = document.getElementById('local-list');
  if (!S.local.length) { list.innerHTML = ''; return; }
  list.innerHTML = S.local.map((t, i) => `
    <div class="r-row" data-lid="${t.id}">
      <div class="r-num">${i + 1}</div>
      <div class="r-art" style="background:${t.grad}">${t.abbr}</div>
      <div class="r-info">
        <div class="r-name">${t.name}</div>
        <div class="r-artist">${t.artist}</div>
      </div>
      <div class="r-album">${t.album}</div>
      <div class="r-dur">${t.dur}</div>
      <div></div>
    </div>
  `).join('');

  list.querySelectorAll('.r-row').forEach(row => {
    row.addEventListener('click', () => {
      const track = S.local.find(x => String(x.id) === String(row.dataset.lid));
      if (!track) return;
      const qi = S.queue.findIndex(x => x.id === track.id);
      if (qi !== -1) loadAndPlay(qi);
    });
  });
}

function updateLocalStats() {
  document.getElementById('s-tracks').textContent = S.local.length;
  const mb = (S.local.reduce((a, t) => a + (t.fileSize || 0), 0) / (1024 * 1024)).toFixed(1);
  document.getElementById('s-size').textContent = mb + ' MB';
}

// ══════════════════════════════════════
// AUDIO EVENTS (local files)
// ══════════════════════════════════════
audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  document.getElementById('p-fill').style.width = pct + '%';
  document.getElementById('player-prog-line').style.width = pct + '%';
  const bar = document.getElementById('p-bar');
  const thumb = bar.querySelector('.p-thumb');
  if (thumb) { thumb.style.left = pct + '%'; thumb.style.right = 'auto'; }
  const m = Math.floor(audio.currentTime / 60), s = Math.floor(audio.currentTime % 60);
  document.getElementById('p-cur').textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
});

audio.addEventListener('loadedmetadata', () => {
  const m = Math.floor(audio.duration / 60), s = Math.floor(audio.duration % 60);
  const d = `${m}:${s < 10 ? '0' : ''}${s}`;
  document.getElementById('p-tot').textContent = d;
  const cur = S.queue[S.idx];
  if (cur && cur.isLocal) { cur.dur = d; renderLocal(); }
});

audio.addEventListener('ended', () => {
  if (S.repeat) { audio.currentTime = 0; audio.play(); }
  else playNext();
});

// ══════════════════════════════════════
// EVENT LISTENERS
// ══════════════════════════════════════

// Navigation with page transition
document.querySelectorAll('.nav-item').forEach(n => {
  n.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(x => x.classList.remove('active'));
    n.classList.add('active');
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    const target = document.getElementById(n.dataset.page + '-page');
    target.classList.add('active');
    // Re-trigger scroll reveal when navigating back to home
    if (n.dataset.page === 'home') {
      setTimeout(() => {
        if (revealObserver) revealObserver.disconnect();
        revealObserver = initScrollReveal();
      }, 50);
    }
    if (n.dataset.page === 'search')
      setTimeout(() => document.getElementById('search-input').focus(), 120);
  });
});

// Search — auto-switch to search page as you type
document.getElementById('search-input').addEventListener('input', e => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll('.nav-item').forEach(x => x.classList.remove('active'));
  document.querySelector('[data-page="search"]').classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('search-page').classList.add('active');
  doSearch(q);
});

// Player controls
document.getElementById('p-play').addEventListener('click', togglePlay);
document.getElementById('p-prev').addEventListener('click', playPrev);
document.getElementById('p-next').addEventListener('click', playNext);

document.getElementById('p-shuffle').addEventListener('click', () => {
  S.shuffle = !S.shuffle;
  document.getElementById('p-shuffle').classList.toggle('on', S.shuffle);
  showToast(S.shuffle ? 'Shuffle on' : 'Shuffle off');
});

document.getElementById('p-repeat').addEventListener('click', () => {
  S.repeat = !S.repeat;
  document.getElementById('p-repeat').classList.toggle('on', S.repeat);
  showToast(S.repeat ? 'Repeat on' : 'Repeat off');
});

document.getElementById('p-like').addEventListener('click', () => {
  if (S.idx < 0) return;
  const s = S.queue[S.idx];
  if (S.liked.has(s.id)) {
    S.liked.delete(s.id);
    document.getElementById('p-like').classList.remove('on');
    document.querySelector('#p-like i').className = 'fa-regular fa-heart';
  } else {
    S.liked.add(s.id);
    document.getElementById('p-like').classList.add('on');
    document.querySelector('#p-like i').className = 'fa-solid fa-heart';
    showToast(`♥ Liked "${s.name}"`);
  }
});

// Progress bar click to seek
document.getElementById('p-bar').addEventListener('click', e => {
  const rect = document.getElementById('p-bar').getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  const s = S.queue[S.idx];
  if (!s) return;
  if (s.isLocal && audio.duration) {
    audio.currentTime = pct * audio.duration;
    return;
  }
  clearInterval(simTimer);
  const [m, sec] = s.dur.split(':').map(Number);
  const total = m * 60 + sec;
  let el = Math.floor(pct * total);
  document.getElementById('p-fill').style.width = (pct * 100) + '%';
  document.getElementById('player-prog-line').style.width = (pct * 100) + '%';
  const cm = Math.floor(el / 60), cs = el % 60;
  document.getElementById('p-cur').textContent = `${cm}:${cs < 10 ? '0' : ''}${cs}`;
  simTimer = setInterval(() => {
    if (!S.playing) return;
    el++;
    if (el >= total) { clearInterval(simTimer); onEnd(); return; }
    const p2 = (el / total) * 100;
    document.getElementById('p-fill').style.width = p2 + '%';
    document.getElementById('player-prog-line').style.width = p2 + '%';
    const m2 = Math.floor(el / 60), s2 = el % 60;
    document.getElementById('p-cur').textContent = `${m2}:${s2 < 10 ? '0' : ''}${s2}`;
  }, 1000);
});

// Volume bar
document.getElementById('vol-track').addEventListener('click', e => {
  const rect = document.getElementById('vol-track').getBoundingClientRect();
  S.volume = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  audio.volume = S.volume;
  document.getElementById('vol-fill').style.width = (S.volume * 100) + '%';
  const ic = document.querySelector('#p-mute i');
  ic.className = S.volume === 0
    ? 'fa-solid fa-volume-xmark'
    : S.volume < 0.5
    ? 'fa-solid fa-volume-low'
    : 'fa-solid fa-volume-high';
});

// Mute toggle
document.getElementById('p-mute').addEventListener('click', () => {
  if (audio.volume > 0) {
    audio.volume = 0;
    document.getElementById('vol-fill').style.width = '0%';
    document.querySelector('#p-mute i').className = 'fa-solid fa-volume-xmark';
  } else {
    audio.volume = 0.7; S.volume = 0.7;
    document.getElementById('vol-fill').style.width = '70%';
    document.querySelector('#p-mute i').className = 'fa-solid fa-volume-high';
  }
});

// Queue panel toggle
document.getElementById('queue-btn').addEventListener('click', () => {
  document.getElementById('q-panel').classList.toggle('open');
  document.getElementById('queue-btn').classList.toggle('active');
  renderQueue();
});
document.getElementById('q-close').addEventListener('click', () => {
  document.getElementById('q-panel').classList.remove('open');
  document.getElementById('queue-btn').classList.remove('active');
});

// Queue tabs
document.querySelectorAll('.q-tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.q-tab').forEach(x => x.classList.remove('on'));
    t.classList.add('on');
    S.tab = t.dataset.tab;
    renderQueue();
  });
});

// Hero buttons
document.getElementById('play-all-btn').addEventListener('click', () => {
  S.queue = [...SONGS];
  loadAndPlay(0);
});
document.getElementById('shuffle-hero-btn').addEventListener('click', () => {
  S.queue = [...SONGS].sort(() => Math.random() - .5);
  S.shuffle = true;
  document.getElementById('p-shuffle').classList.add('on');
  loadAndPlay(0);
});

// File upload
document.getElementById('file-input').addEventListener('change', e => addFiles(e.target.files));
const dz = document.getElementById('dropzone');
dz.addEventListener('dragover',  e => { e.preventDefault(); dz.classList.add('over'); });
dz.addEventListener('dragleave', ()  => dz.classList.remove('over'));
dz.addEventListener('drop',      e  => { e.preventDefault(); dz.classList.remove('over'); addFiles(e.dataTransfer.files); });

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if (e.code === 'Space')      { e.preventDefault(); togglePlay(); }
  else if (e.code === 'ArrowRight') playNext();
  else if (e.code === 'ArrowLeft')  playPrev();
  else if (e.code === 'KeyL') {
    document.getElementById('p-like').click();
  }
});

// ══════════════════════════════════════
// INIT
// ══════════════════════════════════════
renderPlaylists();
renderHome();
renderQueue();