const inputCelsius = document.getElementById('inputCelsius');
const inputFarenheit = document.getElementById('inputFarenheit');

function convertirCelsiusEnFarenheit() {
    inputFarenheit.value = ((inputCelsius.value * 9 / 5) + 32).toFixed(2);
}

function convertirFarenheitEnCelsius() {
    inputCelsius.value = ((inputFarenheit.value - 32) * 5 / 9).toFixed(2);
}