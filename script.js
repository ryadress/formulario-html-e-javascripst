function validarFormulario() {
    var valorCampoA = parseFloat(document.getElementById('campoA').value);
    var valorCampoB = parseFloat(document.getElementById('campoB').value);

    if (isNaN(valorCampoA) || isNaN(valorCampoB)) {
        alert(" insira números válidos nos campos A e B.");
    } else if (valorCampoB <= valorCampoA) {
        alert("O campo B deve ser maior que o campo A. Formulário está inválido.");
    } else {
        alert("Formulário enviado ");
    }
}