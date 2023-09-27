"use strict";
// non generic
// ! means not null
// const inputEl = document.querySelector("#username")! as HTMLInputElement
// generic
// ! means not null
const inputEl = document.querySelector("#username");
inputEl.value = "Hacked!";
const btnEl = document.querySelector("#btn");
btnEl.addEventListener("click", () => {
    alert(inputEl.value);
});
