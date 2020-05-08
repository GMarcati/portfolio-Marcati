function valida(f) {
    var ok = true;
    var msg = "Falta llenar campos:\n";
    if (f.elements[0].value == "") {
        msg += "- Nombre \n";
        ok = false;
    }

    if (f.elements["mail"].value == "") {
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