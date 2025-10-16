const themeKey = "razdaan-theme";
const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const primaryNav = document.querySelector(".primary-nav");
const menuToggle = document.querySelector(".menu-toggle");
const progressIndicator = document.querySelector(".progress-indicator");
const newsletterForm = document.querySelector(".newsletter-form");
const feedback = document.querySelector(".form-feedback");
const yearEl = document.getElementById("year");

// Using a simple JSON manifest under posts/index.json to list blogs on the homepage.

function setTheme(theme) {
  body.setAttribute("data-theme", theme);
  localStorage.setItem(themeKey, theme);
}

(function initTheme() {
  const stored = localStorage.getItem(themeKey);
  if (stored) {
    setTheme(stored);
    return;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
})();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(current);
  });
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !expanded);
    primaryNav.classList.toggle("active");
  });
  document.addEventListener("click", (event) => {
    if (!primaryNav.contains(event.target) && event.target !== menuToggle) {
      primaryNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressIndicator.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateProgress);
updateProgress();

// Newsletter form removed from homepage in simplified design; keep guard if present elsewhere.
if (newsletterForm && feedback) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(newsletterForm);
    const email = formData.get("email");
    if (!email) return;
    feedback.textContent = "Sending...";
    setTimeout(() => {
      feedback.textContent = "You are on the list. Expect the next dispatch soon.";
      newsletterForm.reset();
    }, 800);
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".primary-nav a");

const toDate = (value) => new Date(value);
const formatDate = (value) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(toDate(value));

const formatMinutes = (minutes) => `${minutes} min read`;

const populateBlogs = async () => {
  const container = document.querySelector('[data-populate="blogs"]');
  if (!container) return;
  container.innerHTML = "";
  try {
    const res = await fetch("posts/index.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load posts manifest: ${res.status}`);
    const items = await res.json();
    items
      .sort((a, b) => toDate(b.published) - toDate(a.published))
      .forEach((entry) => {
        const a = document.createElement("a");
        a.className = "blog-item";
        a.href = entry.href;

        const title = document.createElement("h3");
        title.textContent = entry.title;

        const meta = document.createElement("span");
        meta.className = "meta";
        const date = entry.published ? formatDate(entry.published) : "";
        const length = entry.readTime ? formatMinutes(entry.readTime) : "";
        meta.textContent = [date, length].filter(Boolean).join(" • ");

        a.append(title, meta);
        container.append(a);
      });
  } catch (err) {
    const error = document.createElement("p");
    error.textContent = "Unable to load posts right now.";
    container.append(error);
    console.error(err);
  }
};

populateBlogs();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: "-50% 0px -40% 0px" }
);

sections.forEach((section) => {
  observer.observe(section);
});
