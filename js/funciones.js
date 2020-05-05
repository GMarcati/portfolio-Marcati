const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Estoy esperando una direcci�n de correo electr�nico!");
    } else {
        email.setCustomValidity("");
    }
});