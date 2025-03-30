const filterToggleBtn = document.querySelector(".filter_btn");
const closeFilterBtn = document.querySelector(".filter_head a");
const pageFilter = document.querySelector(".page_filter");

filterToggleBtn.addEventListener("click", function () {
    pageFilter.classList.toggle("active");
});

closeFilterBtn.addEventListener("click", function () {
    pageFilter.classList.remove("active");
});



const rangeInputs = document.querySelectorAll(".range_input input");
const priceInputs = document.querySelectorAll(".range_fields input");
const progress = document.querySelector(".range_slider .progress");

let priceGap = 100;

priceInputs.forEach(priceInput => {
    priceInput.addEventListener("input", (e) => {
        let minVal = parseInt(priceInputs[0].value);
        let maxVal = parseInt(priceInputs[1].value);

        if(maxVal - minVal >= priceGap ) {
            if(e.target.className === "input-min") {
                rangeInputs[0].value = minVal;
                progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
            } else {
                rangeInputs[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
            }
        } 
    });
});

rangeInputs.forEach(rangeInput => {
    rangeInput.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInputs[0].value);
        let maxVal = parseInt(rangeInputs[1].value);

        if(maxVal - minVal < priceGap ) {
            if(e.target.className === "range-min") {
                rangeInputs[0].value = maxVal - priceGap;
            } else {
                rangeInputs[1].value = minVal + priceGap;
            }
        } else {
            priceInputs[0].value = minVal;
            priceInputs[1].value = maxVal;
            progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
        }
    });
});