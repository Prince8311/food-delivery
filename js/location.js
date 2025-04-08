const completeAddressBtn = document.getElementById('complete-address-btn');
const completeAddressForm = document.getElementById('complete-address-form');

completeAddressBtn.addEventListener("click", () => {
    completeAddressForm.classList.add("active");
    completeAddressBtn.style.display = "none";
});