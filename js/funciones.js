const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Estoy esperando una dirección de correo electrónico!");
    } else {
        email.setCustomValidity("");
    }
});