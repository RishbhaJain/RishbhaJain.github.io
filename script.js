const mediaImages = document.querySelectorAll("[data-media] img");

mediaImages.forEach((image) => {
  const showPlaceholder = () => image.classList.add("is-missing");

  image.addEventListener("error", showPlaceholder);
  if (image.complete && image.naturalWidth === 0) showPlaceholder();
});

const revealTargets = document.querySelectorAll(
  ".section-heading, .comparison-grid > *, .observation, .architecture-photo, " +
    ".architecture-notes > *, .dolly-feature, .dolly-explanation > *",
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

const progress = document.querySelector(".scroll-progress");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("nav a");

function updatePageState() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${percentage}%`;

  let currentSection = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - window.innerHeight * 0.35) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.hash === `#${currentSection}`);
  });
}

window.addEventListener("scroll", updatePageState, { passive: true });
window.addEventListener("resize", updatePageState);
updatePageState();
