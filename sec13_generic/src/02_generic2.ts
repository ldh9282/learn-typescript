// non generic
// ! means not null
// const inputEl = document.querySelector("#username")! as HTMLInputElement

// generic
// ! means not null
const inputEl = document.querySelector<HTMLInputElement>("#username")!
inputEl.value = "Hacked!"

const btnEl = document.querySelector<HTMLButtonElement>("#btn")!
btnEl.addEventListener("click", () => {
    alert(inputEl.value)
})