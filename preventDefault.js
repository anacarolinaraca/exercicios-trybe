// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

const clicarLink = (event) => {
    event.preventDefault();
}
hrefLink.addEventListener('click', clicarLink);

const clicarCheckbox = (event) => {
    event.preventDefault();
}
inputCheckbox.addEventListener('click', clicarCheckbox);

const keypress = (event) => {
    if (event.key !== 'a') {
        event.preventDefault();
    }
}
inputText.addEventListener('keypress', keypress);