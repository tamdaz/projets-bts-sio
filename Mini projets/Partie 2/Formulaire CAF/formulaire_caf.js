/**
 * @type {HTMLFormElement}
 */
const formulaire = document.getElementById('formulaire');

/**
 * @type {HTMLInputElement[]}
 */
const inputGenre = document.getElementsByName('genre');

/**
 * @type {HTMLInputElement}
 */
const inputNom = document.getElementById('inputNom');

/**
 * @type {HTMLInputElement}
 */
const inputPrenom = document.getElementById('inputPrenom');

/**
 * @type {HTMLInputElement}
 */
const inputCP = document.getElementById('inputCP');

/**
 * @type {HTMLInputElement}
 */
const inputMDP = document.getElementById('inputMDP');

/**
 * @type {HTMLInputElement}
 */
const inputCMDP = document.getElementById('inputCMDP');

/**
 * @param {SubmitEvent} e
 */
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    console.clear();

    let genre = null;

    for (let i of inputGenre) {
        if (i.checked) {
            genre = i.value;
            break;
        }
    }

    /**
     * @type {string}
     */
    let [nom, prenom, cp, mdp, cmdp] = [
        inputNom.value, inputPrenom.value,
        inputCP.value,
        inputMDP.value, inputCMDP.value,
    ];

    if (genre === null) {
        console.error("Il est obligatoire de choisir le genre: Madame ou Monsieur.")
    }

    if (nom !== null && nom.length !== 0) {
        if (nom[0] !== nom[0].toUpperCase())
            console.error("La première lettre du nom doit être en majuscule.")
    } else {
        console.error("Le nom est obligatoire")
    }

    if (prenom !== null && prenom.length !== 0) {
        if (prenom[0] !== prenom[0].toUpperCase())
            console.error("La première lettre du prénom doit être en majuscule.")
    } else {
        console.error("Le prénom est obligatoire")
    }

    if (cp !== null) {
        if (cp.length !== 5 && !Number.isInteger(cp))
            console.error("Le code postal doir avoir exactement 5 chiffres.")
    } else {
        console.error("Code postal obligatoire")
    }

    if (mdp !== null) {
        if (mdp.length < 8)
            console.error("Le mot de passe doit contenir au moins 8 caractères")
    } else {
        console.error("Mot de passe obligatoire")
    }

    if (cmdp !== null) {
        if (mdp !== cmdp)
            console.error("Les mots de passe ne correspondent pas")
    } else {
        console.error("Mot de passe à confirmer est obligatoire")
    }
})