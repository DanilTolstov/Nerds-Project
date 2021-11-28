let link = document.querySelector(".contact-button");
let modal = document.querySelector(".pop-up");
let close = document.querySelector(".close-pop-up");
let form = document.querySelector(".pop-up-form");
let login = modal.querySelector("#your-name");
let email = modal.querySelector("#your-email");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("pop-up-show");

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt){
   evt.preventDefault();
   modal.classList.remove("pop-up-show");
   modal.classList.remove("pop-up-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        modal.classList.remove("pop-up-error")
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("pop-up-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function (evt){
    if (evt.key !== "Escape" ) {
        evt.preventDefault();
        if (modal.classList.contains("modal-show")) {
            modal.classList.remove("pop-up-show");
            modal.classList.remove("pop-up-error");
        }
    }
});
