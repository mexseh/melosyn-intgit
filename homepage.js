document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Initialize first slide
  showSlide(currentSlide);

  // If you want to hook up buttons via JS instead of inline onclick:
  document.querySelectorAll(".arrow")[0].addEventListener("click", prevSlide);
  document.querySelectorAll(".arrow")[1].addEventListener("click", nextSlide);
});

// Particles

document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#0a0a0a" },
      shape: { type: "circle" },
      opacity: { value: 0.2, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#0a0a0a",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "window",  // 👈 THE FIX
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.4 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
});

// Preloader

// === Preloader: Shutter Animation ===

window.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("intro-preloader");

  // Animate shutter bars
  gsap.to(".bar", {
    delay: 3.5,
    height: 0,
    duration: 1.5,
    ease: "power4.inOut",
    stagger: {
      each: 0.1
    }
  });

  // Fade out MELOSYNC logo
  gsap.to(".intro-logo", {
    delay: 3.4,
    opacity: 0,
    duration: 0.5
  });

  // Fade out entire preloader after animation
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 800);
  }, 5300); // Delay after bar animation ends
});

