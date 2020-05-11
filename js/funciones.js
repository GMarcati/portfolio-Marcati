function valida(f) {
    var ok = true;
    var msg = "Faltan llenar campos:\n";
    if (f.nombre.value == "") {
        msg += "- Nombre \n";
        ok = false;
    }

    if (f.mail.value == "") {
        msg += "- Mail \n";
        ok = false;
    }

    if (f.mensaje.value == "") {
        msg += "- Mensaje \n";
        ok = false;
    }

    if (ok == false)
        alert(msg);
    return ok;
}