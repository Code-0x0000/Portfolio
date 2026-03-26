//typing
let typed;
const startTyping = () => {
  if (typed) typed.destroy();
  typed = new Typed("#element", {
    strings: [
      "Coder",
      "Backend Developer",
      "Full Stack Developer",
      "Web Developer",
      "Programmer",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 50,
    loop: true,
  });
};

const toggleMenu=(rightNav, hamburger, overlay)=> {
  rightNav.classList.toggle("active");
  hamburger.classList.toggle("open");
  overlay.classList.toggle("active");

  // // Update ARIA attribute for accessibility
  const isExpanded = hamburger.classList.contains("open");
  hamburger.setAttribute("aria-expanded", isExpanded);

  // Prevent body scroll when menu is open
  if (isExpanded) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

// Load Navbar and Footer
function loadComponent(id, file) {
  return fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      return data;
    });
}

function initApp() {
  const hamburger = document.querySelector(".hamburger");
  const rightNav = document.querySelector(".rightNav");
  const overlay = document.querySelector(".overlay");
  const content = document.getElementById("content");
  const links = document.querySelectorAll(".rightNav ul li a");

  hamburger.addEventListener("click", () =>
    toggleMenu(rightNav, hamburger, overlay),
  );
  overlay.addEventListener("click", () =>
    toggleMenu(rightNav, hamburger, overlay),
  );
  hamburger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Prevent default scroll behavior for spacebar
      toggleMenu(rightNav, hamburger, overlay);
    }
  });

  function loadPage(page) {

    if (page === "home") {
      loadComponent("content", "home.html").then(() => startTyping());
    } else if (page === "about") {
      loadComponent("content", "about.html");
    } else if (page === "service") {
      loadComponent("content", "service.html");
    } else if (page === "contact") {
      loadComponent("content", "contact.html");
    } else if (page === "skills") {
      loadComponent("content", "skills.html");
    } else if (page === "project") {
      loadComponent("content", "projects.html");
    }

    links.forEach((link) => {
       link.addEventListener("click",()=>{
         if (rightNav.classList.contains("active")) {
          toggleMenu(rightNav, hamburger, overlay);
        }
      });
      link.classList.remove("active");
      if (link.dataset.page === page) {
        link.classList.add("active");
      }
    }
  );
  }

  // linkCheck(navLink);

  function handleRouting() {
    const hash = window.location.hash.replace("#", "");
    const page = hash || "home";
    loadPage(page);
  }

  window.addEventListener("hashchange", handleRouting);
  handleRouting();
}

// First load navbar and footer, then initialize app
loadComponent("navbar", "navbar.html").then(() => {
loadComponent("footer", "footer.html").then(initApp);
});

