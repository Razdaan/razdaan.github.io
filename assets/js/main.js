const themeKey = "razdaan-theme";
const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const primaryNav = document.querySelector(".primary-nav");
const menuToggle = document.querySelector(".menu-toggle");
const progressIndicator = document.querySelector(".progress-indicator");
const newsletterForm = document.querySelector(".newsletter-form");
const feedback = document.querySelector(".form-feedback");
const yearEl = document.getElementById("year");

const posts = [
  {
    type: "essay",
    slug: "cartographies-of-doubt",
    title: "Cartographies of Doubt",
    description:
      "A traversal through Derridean différance and the necessity of provisional belief when the ground refuses to stay still.",
    href: "posts/cartographies-of-doubt.html",
    readTime: 22,
    tag: "Discourse",
    published: "2025-10-12",
    featured: true,
  },
  {
    type: "essay",
    slug: "after-authenticity",
    title: "After Authenticity",
    description:
      "What remains of the subject once the spectacle becomes atmosphere? Excavating selves beneath the curated feed.",
    href: "posts/after-authenticity.html",
    readTime: 18,
    tag: "Culture",
    published: "2025-09-07",
    featured: true,
  },
  {
    type: "essay",
    slug: "ethics-of-ambiguity",
    title: "Ethics of Ambiguity Revisited",
    description:
      "Extending de Beauvoir's wager into our algorithmic present to sketch an ethics of gentle refusal and relational care.",
    href: "posts/ethics-of-ambiguity.html",
    readTime: 24,
    tag: "Ethics",
    published: "2025-08-14",
    featured: false,
  },
  {
    type: "essay",
    slug: "on-transhumanism",
    title: "On Transhumanism",
    description:
      "A three-tier reading of augmentation—social, individual, sub-individual—and the hope that progress can remain collective.",
    href: "posts/on-transhumanism.html",
    readTime: 11,
    tag: "Futures",
    published: "2025-05-13",
    featured: true,
  },
  {
    type: "essay",
    slug: "on-society",
    title: "On Society",
    description:
      "Charting how left and right imaginaries continue to co-produce cohesion, bias, and the grey zones of everyday life.",
    href: "posts/on-society.html",
    readTime: 12,
    tag: "Civics",
    published: "2024-02-01",
    featured: false,
  },
  {
    type: "essay",
    slug: "on-euthanasia",
    title: "On Euthanasia",
    description:
      "Interrogating autonomy, suffering, and whether life without freedom—mental or physical—remains a life at all.",
    href: "posts/on-euthanasia.html",
    readTime: 14,
    tag: "Mortality",
    published: "2024-01-20",
    featured: false,
  },
  {
    type: "essay",
    slug: "on-technological-historicism",
    title: "On Technological Historicism",
    description:
      "Following Hegel and Marx to see how speed, mediation, and latency shape consciousness in the age of hyperconnectivity.",
    href: "posts/on-technological-historicism.html",
    readTime: 10,
    tag: "Theory",
    published: "2023-10-16",
    featured: false,
  },
  {
    type: "essay",
    slug: "on-sufism",
    title: "On Sufism",
    description:
      "Positioning Sufi practice as an interior orthodoxy that strips ritual down to ecstatic rigor and lived unity.",
    href: "posts/on-sufism.html",
    readTime: 9,
    tag: "Mysticism",
    published: "2023-08-08",
    featured: false,
  },
  {
    type: "essay",
    slug: "on-history-as-part-of-religion",
    title: "On History as Part of Religion",
    description:
      "How narrative, doctrine, and strategic memory entwine from early Christendom to modern social sciences.",
    href: "posts/on-history-as-part-of-religion.html",
    readTime: 16,
    tag: "History",
    published: "2020-06-26",
    featured: false,
  },
  {
    type: "monologue",
    slug: "monologue-fragmented-truths",
    title: "On Fragmented Truths",
    description:
      "Negotiating plurality without cynicism; a solo reckoning with postmodern civic virtue.",
    partner: "with Dr. Saira Ney",
    href: "posts/monologue-fragmented-truths.html",
    readTime: 9,
    published: "2025-07-18",
  },
  {
  type: "monologue",
    slug: "monologue-care-after-certainty",
    title: "Care After Certainty",
    description:
      "Improvising mutual care when institutions and grand narratives fracture beyond repair.",
    partner: "with Prof. Len Kawabata",
    href: "posts/monologue-care-after-certainty.html",
    readTime: 7,
    published: "2025-06-02",
  },
  {
  type: "monologue",
    slug: "monologue-micro-politics-of-silence",
    title: "Micro-politics of Silence",
    description:
      "Recasting quiet as deliberate presence and a commons tended in resistance to extraction.",
    partner: "with Maya Ortiz",
    href: "posts/monologue-micro-politics-of-silence.html",
    readTime: 6,
    published: "2025-05-11",
  },
];

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

if (newsletterForm && feedback) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(newsletterForm);
    const email = formData.get("email");
    if (!email) {
      return;
    }
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

const populateFeatured = () => {
  const container = document.querySelector('[data-populate="featured"]');
  if (!container) {
    return;
  }
  container.innerHTML = "";
  const featured = posts
    .filter((entry) => entry.type === "essay" && entry.featured)
    .sort((a, b) => toDate(b.published) - toDate(a.published))
    .slice(0, 3);

  featured.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "essay-card";

    const anchor = document.createElement("a");
    anchor.href = entry.href;
    anchor.setAttribute("aria-label", `${entry.title}, ${entry.tag}`);

    const title = document.createElement("h3");
    title.textContent = entry.title;

    const summary = document.createElement("p");
    summary.textContent = entry.description;

    const meta = document.createElement("span");
    meta.className = "meta";
    meta.textContent = `${formatMinutes(entry.readTime)} • ${entry.tag}`;

    anchor.append(title, summary, meta);
    article.append(anchor);
    container.append(article);
  });
};

const populateLatest = () => {
  const container = document.querySelector('[data-populate="latest"]');
  if (!container) {
    return;
  }
  container.innerHTML = "";
  const latest = posts
    .filter((entry) => entry.type === "essay")
    .sort((a, b) => toDate(b.published) - toDate(a.published))
    .slice(0, 6);

  latest.forEach((entry) => {
    const anchor = document.createElement("a");
    anchor.className = "latest-card";
    anchor.href = entry.href;

    const eyebrow = document.createElement("span");
    eyebrow.className = "meta";
    eyebrow.textContent = `${formatDate(entry.published)} • ${entry.tag}`;

    const title = document.createElement("h3");
    title.textContent = entry.title;

    const summary = document.createElement("p");
    summary.textContent = entry.description;

    const length = document.createElement("span");
    length.className = "meta";
    length.textContent = formatMinutes(entry.readTime);

    anchor.append(eyebrow, title, summary, length);
    container.append(anchor);
  });
};

const populateMonologues = () => {
  const container = document.querySelector('[data-populate="monologues"]');
  if (!container) {
    return;
  }
  container.innerHTML = "";
  const monologues = posts
    .filter((entry) => entry.type === "monologue")
    .sort((a, b) => toDate(b.published) - toDate(a.published));

  monologues.forEach((entry) => {
  const article = document.createElement("article");
  article.className = "monologue-card";
    article.setAttribute("role", "listitem");

    const title = document.createElement("h3");
    title.textContent = entry.title;

    const partner = document.createElement("p");
    partner.className = "partner";
    partner.textContent = entry.partner ?? "";

    const summary = document.createElement("p");
    summary.textContent = entry.description;

  const link = document.createElement("a");
  link.className = "text-link";
  link.href = entry.href;
  link.textContent = "Read monologue";

    article.append(title, partner, summary, link);
    container.append(article);
  });
};

populateFeatured();
populateLatest();
populateMonologues();

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
  { rootMargin: "-60% 0px -35% 0px" }
);

sections.forEach((section) => {
  observer.observe(section);
});
