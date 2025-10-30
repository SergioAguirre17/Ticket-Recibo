var formulario;
formulario = document.getElementById("calculoMinutos");

function calcular() {
var total = 0;
var minutos = formulario.MinLlam.value;
total = minutos * 10;
var cliente = formulario.cliente.value;
alert(cliente);

//PLANES
if (formulario.plan.value == "ST") {
    total = total + 200;
}
if (formulario.plan.value == "TI") {
    total = total + 450;
}
if (formulario.plan.value == "TITV") {
    total = total + 850;
}

//SERVICIOS ADICIONALES
if (formulario.av.checked == true) {
    total = total + 30;
}
if (formulario.sn.checked == true) {
    total = total + 50;
}
if (formulario.sw.checked == true) {
    total = total + 40;
}

//PAQUETES
if (formulario.select.value == "residencial") {
    total = total + 230;
}
else if (formulario.select.value == "PYMES") {
    total = total + 400;
}
else if (formulario.select.value == "EMPRESAS") {
    total = total + 700;
}

formulario.calculo.value = total;
}

