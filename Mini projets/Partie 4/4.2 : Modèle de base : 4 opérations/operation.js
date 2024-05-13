/**
 * @type {HTMLInputElement}
 */
const valueOperation = document.getElementById('valueOperation');

/**
 * @type {HTMLInputElement}
 */
const valueResult = document.getElementById('valueResult');

/**
 * @type {HTMLButtonElement}
 */
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const [a, sign, b] = valueOperation.value.split(" ");

    switch (sign) {
        case "+":
            valueResult.value = parseInt(a) + parseInt(b);
            break;
        case "-":
            valueResult.value = parseInt(a) - parseInt(b);
            break;
        case "*":
            valueResult.value = parseInt(a) * parseInt(b);
            break;
        case "/":
            valueResult.value = parseInt(a) / parseInt(b);
            break;
    }
    
    // valueResult.value = eval(valueOperation.value);
})