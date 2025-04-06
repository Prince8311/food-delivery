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



var transactionRows = document.querySelectorAll(".transaction_row");
const transactionPopup = document.querySelector(".transaction_popup_wrapper");
const transactionPopupClose = document.getElementById('transaction-popup-close');

transactionRows.forEach(transactionRow => {
    transactionRow.addEventListener("click", () => {
        transactionPopup.classList.toggle("active");
    });
});
transactionPopupClose.addEventListener("click", () => {
    transactionPopup.classList.remove("active");
});

