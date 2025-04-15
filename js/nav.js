document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= 190) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

const footer = document.querySelector(".footer");
const toggleIcon = document.querySelector(".show a i"); 

toggleIcon.addEventListener("click", function () {
    if (footer.style.display === "none") {
        footer.style.display = "block";
        toggleIcon.classList.remove("fa-plus");
        toggleIcon.classList.add("fa-minus");
    } else {
        footer.style.display = "none";
        toggleIcon.classList.remove("fa-minus"); 
        toggleIcon.classList.add("fa-plus"); 
    }
});

const toggleBtn = document.querySelector(".res_nav_toggle_btn");
const sideberPopup = document.querySelector(".sideber_popup_section");

toggleBtn.addEventListener("click", ()=> {
    sideberPopup.classList.toggle("active");
});




    