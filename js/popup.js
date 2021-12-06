const link = document.querySelector(".contact-button");
const modal = document.querySelector(".pop-up");
const close = document.querySelector(".close-pop-up");
const form = modal.querySelector(".pop-up-form");
const login = modal.querySelector("#your-name");
const email = modal.querySelector("#your-email");
const letter = modal.querySelector("#your-letter");
const button = modal.querySelector(".button-form");
const body = document.body;

let isValidate = false;


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("pop-up-show");
    body.classList.add("pop-up-overflow");
});

close.addEventListener("click", function (evt) {
        evt.preventDefault();
        modal.classList.remove("pop-up-show");
        body.classList.remove("pop-up-overflow");
});

document.addEventListener("keydown", function (evt){
    if (evt.key === "Escape") {
        modal.classList.remove("pop-up-show");
        body.classList.remove("pop-up-overflow");
    }
});

login.addEventListener("input", function (){
    if (login.value.length > 1 && email.value.length > 1 && letter.value.length > 1 ){
        button.removeAttribute("disabled");
    }
});

email.addEventListener("input", function (){
    if (login.value.length > 1 && email.value.length > 1 && letter.value.length > 1 ){
        button.removeAttribute("disabled");
    }
});

letter.addEventListener("input", function (){
    if (login.value.length > 1 && email.value.length > 1 && letter.value.length > 1 ){
        button.removeAttribute("disabled");
    }
});

