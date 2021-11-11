function mostrarResultado() {
    var txtUno = document.getElementById('txt1').value;
    var txtDos = document.getElementById('txt2').value;
    var txtResultado = txtUno + txtDos;
    document.getElementById('txt3').value = txtResultado;
}

function mostrarResultadoSum() {
    var numUno = document.getElementById('number1').value;
    var numDos = document.getElementById('number2').value;
    var txtResultadoC = parseFloat(numUno) + parseFloat(numDos);
    document.getElementById('number3').value = txtResultadoC;
}

function mostrarResultadoRest() {
    var numUno = document.getElementById('number1').value;
    var numDos = document.getElementById('number2').value;
    var txtResultadoC = numUno - numDos;
    document.getElementById('number3').value = txtResultadoC;
}

function mostrarResultadoMulti() {
    var numUno = document.getElementById('number1').value;
    var numDos = document.getElementById('number2').value;
    var txtResultadoC = numUno * numDos;
    document.getElementById('number3').value = txtResultadoC;
}

function mostrarResultadoDivi() {
    var numUno = document.getElementById('number1').value;
    var numDos = document.getElementById('number2').value;
    var txtResultadoC = numUno / numDos;
    document.getElementById('number3').value = txtResultadoC;
}