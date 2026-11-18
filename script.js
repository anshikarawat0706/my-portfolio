// Mobile Navigation

let menuBtn = document.getElementById("menuBtn");

let navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function() {

    navbar.classList.toggle("show");

});


// Close menu after clicking a link

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("show");

    });

});


// Back To Top Button

let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// Scroll Animation

let sections = document.querySelectorAll(".section");

sections.forEach(function(section) {

    section.classList.add("reveal");

});

let observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(function(section) {

    observer.observe(section);

});


// Project Details

function showDetails(projectName) {

    alert(
        "Project: " + projectName +
        "\n\nMore project information can be added here."
    );

}