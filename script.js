//typing
let typed;
function startTyping() {
    if(typed) typed.destroy();
    typed = new Typed('#element', {
        strings: [
            'Coder',
            'Backend Developer',
            'Full Stack Developer',
            'Web Developer',
            'Programmer'
        ],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 50,
        loop: true,
    });
}


// Load Navbar and Footer
function loadComponent(id, file) {
    return fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            return data;
        });
}

function initApp() {
    const content = document.getElementById("content");
    const links = document.querySelectorAll(".rightNav ul li a");
    
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


        links.forEach(link => {
            link.classList.remove("active");
            if (link.dataset.page === page) {
                link.classList.add("active");
            }
        });
    }

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

//Hamburgur Menu
// const hamburgur = document.querySelector(".hamburgur");
// const rightNav = document.querySelector(".rightNav");

// hamburgur.addEventListener("click", () => {
//     rightNav.classList.toggle("active");
//     hamburgur.classList.toggle("active");
// });

