// ===============================
// HAMBURGER MENU
// ===============================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ===============================
// CLOSE MENU AFTER CLICKING A LINK
// ===============================

const navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// HEADER BACKGROUND ON SCROLL
// ===============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#020617";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.background = "#111827";
        header.style.boxShadow = "none";

    }

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".service-box, .project-card, .skill-box, .contact-card, .about-content, .about-image"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

console.log("Portfolio Loaded Successfully!");