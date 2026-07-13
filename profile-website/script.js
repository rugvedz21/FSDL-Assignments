/* ===================================
   RUGVED ZAMBARE - PORTFOLIO JS
   =================================== */

// Project Data
const projects = {
  1: {
    title: 'StackMind: Fine-Tuned LLM on Stack Overflow Dataset',
    meta: 'LLM / MLOps &bull; 2025',
    description: 'A fine-tuned Qwen3 model trained on 500K+ Stack Overflow Q&A pairs, reducing hallucination rate by ~35% versus the base model through RLHF-aligned instruction formatting and automated BLEU/F1 evaluation.',
    tags: ['Qwen3', 'HuggingFace Transformers', 'FastAPI', 'GCP Cloud Run', 'Git'],
    details: 'Replaced ad-hoc Colab notebooks with CI-style training loops, checkpoint versioning, and Precision/Recall tracking across every run — cutting model iteration time by ~40%. Currently building a production streaming REST API (FastAPI) on GCP Cloud Run, with the model card and weights slated for release on HuggingFace Hub.',
    links: { github: 'https://github.com/rugvedz21' }
  },
  2: {
    title: 'AI Assignment Grader: GPU OCR and Auto-Scoring Engine',
    meta: 'Machine Learning &bull; 2025',
    description: 'An end-to-end grading engine combining OCR and a fine-tuned scoring model to auto-grade handwritten assignments — 7ms per-assignment inference on a 4GB GTX 1650 using AMP mixed precision.',
    tags: ['PyTorch', 'TrOCR', 'EasyOCR', 'Flask', 'SQLite'],
    details: 'A hybrid EasyOCR (line detection) + fine-tuned Microsoft TrOCR (handwriting) pipeline, tolerant of skewed phone photos via auto orientation detection. A fragment-tolerant fuzzy matcher (difflib SequenceMatcher) reconstructs OCR-shattered words, lifting recall from ~33% to 100% on noisy handwriting. The explainable grading engine flags missing concepts, negation-detected wrong statements, and OCR misreads without an LLM — backed by a ResNet18 score-bucket classifier at 90.8% accuracy, shipped end-to-end with a Flask + HTML/CSS/JS frontend.',
    links: { github: 'https://github.com/rugvedz21' }
  },
  3: {
    title: 'NOVA: Gesture-Controlled Spotify Player',
    meta: 'Computer Vision &bull; 2024',
    description: 'A touchless Spotify controller using MediaPipe Hands (21 landmarks/hand) to classify real-time finger-state gestures via webcam for play, pause, skip, and volume control.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Spotipy', 'OAuth 2.0 PKCE'],
    details: 'Zero accidental triggers via a hold-frame debouncer and cooldown logic. Full Spotify Connect integration via Spotipy and the Spotify Web Playback SDK — registers as a named Connect device in the browser using client-side-only OAuth 2.0 PKCE, targeting it by name across search, playlists, library, and queue.',
    links: { github: 'https://github.com/rugvedz21' }
  }
};

/* ===================================
   LOADING
   =================================== */

window.addEventListener('load', () => {
  setTimeout(() => {
    const loading = document.getElementById('loading');
    if (loading) loading.classList.add('hidden');
  }, 600);
});

/* ===================================
   TYPING ANIMATION
   =================================== */

const roles = [
  'ML / LLM Engineer',
  'Computer Vision Builder',
  'MLOps Enthusiast',
  'CS Student & Builder'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById('typed-text');

function typeEffect() {
  if (!typedElement) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typedElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 800);
});

/* ===================================
   NAVIGATION
   =================================== */

window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }
});

function scrollToSection(sectionId) {
  if (event) event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Close mobile menu if open
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (navLinks) navLinks.classList.remove('mobile-active');
    if (hamburger) hamburger.classList.remove('active');
  }
}

/* ===================================
   MOBILE MENU
   =================================== */

function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (navLinks && hamburger) {
    navLinks.classList.toggle('mobile-active');
    hamburger.classList.toggle('active');
  }
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (navLinks && hamburger &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target) &&
      navLinks.classList.contains('mobile-active')) {
    navLinks.classList.remove('mobile-active');
    hamburger.classList.remove('active');
  }
});

/* ===================================
   MODAL
   =================================== */

function openModal(projectId) {
  const project = projects[projectId];
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');

  if (!modal || !modalContent || !project) return;

  modalContent.innerHTML = `
    <div class="project-meta" style="margin-bottom: 0.75rem;">${project.meta}</div>
    <h2 style="font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 900; margin-bottom: 1.25rem; letter-spacing: -0.5px;">${project.title}</h2>
    <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem; font-size: 1rem;">${project.description}</p>
    <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem; font-size: 0.92rem;">${project.details}</p>
    <div style="margin-bottom: 1.5rem;">
      <h4 style="color: var(--accent); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.75rem; font-weight: 600;">Tech Stack</h4>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      ${project.links.github ? `<a href="${project.links.github}" target="_blank" class="btn btn-primary" style="padding: 0.7rem 1.5rem; font-size: 0.82rem;">View on GitHub</a>` : ''}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'projectModal') closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ===================================
   SCROLL ANIMATIONS
   =================================== */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll(
    '.project-card, .section-header, .about-content, .about-image, .skill-category, .timeline-item, .contact-card, .contact-form'
  );
  elements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

/* ===================================
   TIME DISPLAY
   =================================== */

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeElement = document.getElementById('localTime');
  if (timeElement) {
    const offset = -now.getTimezoneOffset() / 60;
    const gmtOffset = offset >= 0 ? `+${offset}` : offset;
    timeElement.textContent = `Local Time: ${hours}:${minutes} GMT${gmtOffset}`;
  }
}

updateTime();
setInterval(updateTime, 60000);

/* ===================================
   CONTACT FORM
   =================================== */

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;

  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Simulate sending (replace with actual form backend like Formspree/Netlify)
  setTimeout(() => {
    btn.textContent = 'Message Sent!';
    btn.style.background = 'var(--success)';
    form.reset();

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 2500);
  }, 1000);
}

/* ===================================
   PARALLAX (subtle)
   =================================== */

let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-content');
      if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
      }
      ticking = false;
    });
    ticking = true;
  }
});

/* ===================================
   ENHANCED ANIMATIONS (v2)
   =================================== */

// Scroll progress bar
const scrollProgress = document.getElementById('scrollProgress');
function updateScrollProgress() {
  if (!scrollProgress) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = `${pct}%`;
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

// Cursor spotlight (desktop only)
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow && window.matchMedia('(hover: hover)').matches) {
  let glowX = 0, glowY = 0, curX = 0, curY = 0;
  document.addEventListener('mousemove', (e) => {
    glowX = e.clientX;
    glowY = e.clientY;
    cursorGlow.classList.add('active');
  });
  function animateGlow() {
    curX += (glowX - curX) * 0.12;
    curY += (glowY - curY) * 0.12;
    cursorGlow.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
  document.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));
}

// Animated stat counters
const statNums = document.querySelectorAll('.stat-num');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const isDecimal = target % 1 !== 0;
    let current = 0;
    const steps = 40;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
        clearInterval(timer);
      } else {
        el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
      }
    }, 30);
    statObserver.unobserve(el);
  });
}, { threshold: 0.6 });
statNums.forEach(el => statObserver.observe(el));

// 3D tilt effect on project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Magnetic buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// Staggered skill-tag reveal per category
const skillCategories = document.querySelectorAll('.skill-category');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const tags = entry.target.querySelectorAll('.skill-tag');
    tags.forEach((tag, i) => {
      tag.style.animationDelay = `${i * 70}ms`;
    });
    skillObserver.unobserve(entry.target);
  });
}, { threshold: 0.2 });
skillCategories.forEach(cat => skillObserver.observe(cat));
