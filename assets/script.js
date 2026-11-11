let number = document.querySelector(".number");

let count = 0;

document.querySelector(".Decrease").addEventListener("click", () => {
    count--;
    number.textContent = count;
});

document.querySelector(".Increase").addEventListener("click", () => {
    count++;
    number.textContent = count;
});

document.querySelector(".Reset").addEventListener("click", () => {
    count = 0;
    number.textContent = count;
});