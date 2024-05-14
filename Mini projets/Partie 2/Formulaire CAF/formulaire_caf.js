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
 * @type {HTMLUListElement}
 */
const listErrors = document.getElementById('listErrors');

/**
 * @param {SubmitEvent} e
 */
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    validateForm();
})

/**
 * Fonction qui permet de valider tous les champs.
 * (genre, nom, prénom, code postal, mdp et confirmation du mdp).
 */
function validateForm() {
    listErrors.innerHTML = "";

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

    if (genre === null)
        listErrors.innerHTML += "<li style='color: red'>Il est obligatoire de choisir le genre: Madame ou Monsieur.</li>"

    if (nom !== null && nom.length !== 0) {
        if (nom[0] !== nom[0].toUpperCase())
            listErrors.innerHTML += "<li style='color: red'>La première lettre du nom doit être en majuscule.</li>"
    } else {
        listErrors.innerHTML += "<li style='color: red'>Le nom est obligatoire.</li>"
    }

    if (prenom !== null && prenom.length !== 0) {
        if (prenom[0] !== prenom[0].toUpperCase())
            listErrors.innerHTML += "<li style='color: red'>La première lettre du prénom doit être en majuscule.</li>"
    } else {
        listErrors.innerHTML += "<li style='color: red'>Le prénom est obligatoire.</li>"
    }

    if (cp !== null) {
        if (isNaN(cp))
            listErrors.innerHTML += "<li style='color: red'>Le code postal ne doit pas comporter de lettres, ni de caractères spéciaux.</li>"
        
        if (cp.length !== 5 && !Number.isInteger(cp))
            listErrors.innerHTML += "<li style='color: red'>Le code postal doit avoir exactement 5 chiffres.</li>"
    } else {
        listErrors.innerHTML += "<li style='color: red'>Code postal obligatoire.</li>"

    }

    if (mdp !== null) {
        if (mdp.length < 8)
            listErrors.innerHTML += "<li style='color: red'>Le mot de passe doit contenir au moins 8 caractères.</li>"
    } else {
        listErrors.innerHTML += "<li style='color: red'>Mot de passe obligatoire.</li>"
    }

    if (cmdp !== null) {
        if (mdp !== cmdp)
            listErrors.innerHTML += "<li style='color: red'>Les mots de passe ne correspondent pas.</li>"
    } else {
        listErrors.innerHTML += "<li style='color: red'>Mot de passe à confirmer est obligatoire.</li>"
    }

    if (listErrors.innerHTML === "")
        listErrors.innerHTML += "<li style='color: green'>Pas d'erreurs dans le formulaire.</li>"
}