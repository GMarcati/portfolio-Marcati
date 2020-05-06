


function validarMail() {

    const email = document.getElementById("mailForm");
    email.addEventListener("input", function (event) {

        if (email.validity.typeMismatch) {
            email.setCustomValidity("Estoy esperando una dirección de correo electrónico!");
        } else {
            email.setCustomValidity("");
        }
    });

}


function validar(){



}