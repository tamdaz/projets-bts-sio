const textInput = document.getElementById('textInput');
const keyInput = document.getElementById('keyInput');
const resultInput = document.getElementById('resultInput');

function coderTexte() {
    let result = chiffrer(
        textInput.value,
        Number.parseInt(keyInput.value)
    );

    resultInput.value = result;
}

function chiffrer(texte, cle = 0) {
    let output = "";
    
    for (let i of texte.toUpperCase()) {
        let ascii = i.charCodeAt(0);
        
        if (ascii != 32) {
            ascii += cle * 1

            phraseCodee += String.fromCharCode(
                (ascii - 65) % 26 + 65
            )
        } else {
            phraseCodee += String.fromCharCode(ascii)
        }
    }

    return output.join("");
}