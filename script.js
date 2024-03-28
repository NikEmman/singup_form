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

    clearError();

    if (form.fname.value === "") {
        showError("fname", "fname-error", "* You have to enter your name");
        return false;
    }
    if (form.lname.value === "") {
        showError("lname", "lname-error", "* You have to enter your last name");
        return false;
    }

    if (form.email.value === "") {
        showError("email", "email-error", "* You have to enter your email");
        return false;
    }
    if (!emailRegEx.test(form.email.value)) {
        showError("email", "email-error", "* You have to enter a valid email (i.e. email@example.com)");
        return false;
    }
    if (form.phone.value === "") {
        showError("phone", "phone-error", "* You have to enter your phone number");
        return false;
    }
    if (!phoneRegEx.test(form.phone.value)) {
        showError("phone", "phone-error", "* You have to enter a valid phone number (i.e.69xxxxxxx)");
        return false;
    }
    if (form.password.value === "") {
        showError("password", "password-error", "* You have to enter a password");
        return false;
    }
    if (form.password2.value === "") {
        showError("password2", "password2-error", "* You have to enter a password");
        return false;
    }
    if (form.password.value !== form.password2.value) {
        showError("password2", "password2-error", "* Your passwords no do match");
        return false;
    }











    // this prevents form from submitting to the server
    event.preventDefault();
}