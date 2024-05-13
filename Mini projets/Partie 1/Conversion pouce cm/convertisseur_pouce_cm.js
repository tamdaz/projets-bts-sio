const inputCm = document.getElementById('inputCm');
const inputPouces = document.getElementById('inputPouces');

function convertirCmEnPouces() {
    inputPouces.value = (inputCm.value / 2.54).toFixed(2);
}

function convertirPoucesEnCm() {
    inputCm.value = (inputPouces.value * 2.54).toFixed(2);
}