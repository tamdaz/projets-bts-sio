/**
 * @type {HTMLInputElement}
 */
const passwordInput = document.getElementById('passwordInput')

/**
 * @type {HTMLProgressElement}
 */
const progressBar = document.getElementById('progressBar');

passwordInput.addEventListener('input', () => {
    let score = 0;

    var [hasFirstDigit, hasLowerChar, hasUpperChar, hasSymbolChar] = [
        false, false, false, false        
    ]

    for (let i of passwordInput.value) {
        if (
            (i.charCodeAt(0) >= 33 && i.charCodeAt(0) <= 47) ||
            (i.charCodeAt(0) >= 58 && i.charCodeAt(0) <= 64) ||
            (i.charCodeAt(0) >= 91 && i.charCodeAt(0) <= 96) ||
            (i.charCodeAt(0) >= 123 && i.charCodeAt(0) <= 126)
        ) {
            if (hasSymbolChar === true) {
                score++;
            } else {
                score += 10;
                hasSymbolChar = true;
            }
        } else if (!isNaN(i)) {
            if (hasFirstDigit === true) {
                score++;
            } else {
                score += 10;
                hasFirstDigit = true;
            }
        } else if (i === i.toLowerCase()) {
            if (hasLowerChar === true) {
                score++;
            } else {
                score += 10;
                hasLowerChar = true;
            }
        } else if (i === i.toUpperCase()) {
            if (hasUpperChar === true) {
                score++;
            } else {
                score += 10;
                hasUpperChar = true;
            }
        }
    }

    progressBar.value = score;
})