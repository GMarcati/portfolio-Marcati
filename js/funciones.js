


function validarMail() {

    const email = document.getElementById("mailForm");
    email.addEventListener("input", function (event) {

        if (email.validity.typeMismatch) {
            email.setCustomValidity("Estoy esperando una direcci�n de correo electr�nico!");
        } else {
            email.setCustomValidity("");
        }
    });

}


function validar(){



}