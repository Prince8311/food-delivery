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


document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".res_nav_toggle_btn");
    const sideberPopup = document.querySelector(".sideber_popup_section");

    toggleBtn.addEventListener("click", ()=> {
        sideberPopup.classList.toggle("active");
    });
});