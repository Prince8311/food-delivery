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

document.addEventListener("DOMContentLoaded", function () {
    const anroidPopup = document.querySelector(".anroid_popup_wrapper");
    const popupClose = document.querySelector(".modal_close");
    console.log("hello");
    popupClose.addEventListener("click", () => {
        anroidPopup.classList.remove("active");
    });
});

