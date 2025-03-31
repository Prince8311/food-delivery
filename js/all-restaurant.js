const dropdownBtns = document.querySelectorAll(".selection_btn");

dropdownBtns.forEach(dropdownBtn => {
    dropdownBtn.addEventListener("click", () => {
        let icon = dropdownBtn.parentElement.children[0].children[1];
        let dropdown = dropdownBtn.parentElement.children[1];
        
        icon.classList.toggle("active");
        dropdown.classList.toggle("active");
    });
});