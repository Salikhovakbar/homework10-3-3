const numberEl1 = document.getElementById("math-item1");
const numberEl2 = document.getElementById("math-item2");
const pEl = document.querySelector("#p");
const chose = document.querySelector("#select");
btn.addEventListener("click", () => {
    pEl.innerHTML = eval( numberEl1.value + chose.value + numberEl2.value)
})