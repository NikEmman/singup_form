function showError(errorInput, errorElement, errorMessage) {
    document.querySelector("." + errorElement).classList.add("display-error");
    document.querySelector("#" + errorInput).classList.add("invalid");
    document.querySelector("." + errorElement).textContent = errorMessage;
}

const phoneRegEx = new RegExp("[69][0-9]{9}");
const emailRegEx = new RegExp("^\\S+@\\S+\\.\\S+$");

function clearError() {
    let errors = document.querySelectorAll(".error")
    for (let error of errors) {
        error.classList.remove("display-error");
    }
    let inputs = document.querySelectorAll("input")
    for (input of inputs) {
        input.classList.remove("invalid");
    }
}


let form = document.forms['sign-up-form']
form.onsubmit = function (event) {
    event.preventDefault();

    clearError();

    if (form.fname.value === "" || form.fname.value === null) {
        showError("fname", "fname-error", "* You have to enter your name");
    }

    if (form.lname.value === "" || form.lname.value === null) {
        showError("lname", "lname-error", "* You have to enter your last name");
    }

    if (form.email.value === "" || form.email.value === null) {
        showError("email", "email-error", "* You have to enter your email");
    }
    if (!emailRegEx.test(form.email.value)) {
        showError("email", "email-error", "* You have to enter a valid email (i.e. email@example.com)");
    }
    if (form.phone.value === "" || form.phone.value === null) {
        showError("phone", "phone-error", "* You have to enter your phone number");
    }
    if (!phoneRegEx.test(form.phone.value)) {
        showError("phone", "phone-error", "* You have to enter a valid phone number (i.e.69xxxxxxx)");
    }
    if (form.password.value === "" || form.password.value === null) {
        showError("password", "password-error", "* You have to enter a password");
    }
    if (form.password.value.length <= 5) {
        showError("password", "password-error", "* Your password must be at least 6 characters");
    }
    if (form.password.value.length >= 20) {
        showError("password", "password-error", "* Your password must be less than 20 characters");
    }

    if (form.password.value !== form.password2.value) {
        showError("password2", "password2-error", "* Your passwords no do match");
    }

}


