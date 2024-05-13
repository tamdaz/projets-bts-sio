/**
 * @type {HTMLInputElement}
 */
const valueA = document.getElementById('valueA');

/**
 * @type {HTMLInputElement}
 */
const valueB = document.getElementById('valueB');

/**
 * @type {HTMLInputElement}
 */
const valueResult = document.getElementById('valueResult');

/**
 * @type {HTMLButtonElement}
 */
const button = document.getElementById('button');

button.addEventListener('click', () => {
    valueResult.value = parseInt(valueA.value) + parseInt(valueB.value);
})