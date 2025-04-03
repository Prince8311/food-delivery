var profileMenuBtns = document.querySelectorAll(".profile_menu_btn");
var sections = document.querySelectorAll(".profile_section");

profileMenuBtns.forEach(profileMenuBtn => {
    profileMenuBtn.addEventListener("click", () => {
        let sectionClass = profileMenuBtn.id + "_section";
        profileMenuBtns.forEach(btn => btn.classList.remove("active"));
        profileMenuBtn.classList.add("active");
        sections.forEach(section => {
            if(section.classList.contains(sectionClass)){
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imageBox = document.querySelector(".image_box");
    const popupWrapper = document.querySelector(".image_popup_wrapper");
    const popupClose = document.querySelector(".popup_close");



    
    imageBox.addEventListener("click", function () {
        popupWrapper.classList.add("active");
    });

    popupClose.addEventListener("click", function () {
        popupWrapper.classList.remove("active");
    });
});