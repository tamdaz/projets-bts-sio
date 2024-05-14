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
        addMessage("Il est obligatoire de choisir le genre: Madame ou Monsieur");

    if (nom !== null && nom.length !== 0) {
        if (nom[0] !== nom[0].toUpperCase())
            addMessage("La première lettre du nom doit être en majuscule");
    } else {
        addMessage("Le nom est obligatoire");
    }

    if (prenom !== null && prenom.length !== 0) {
        if (prenom[0] !== prenom[0].toUpperCase())
            addMessage("La première lettre du prénom doit être en majuscule");
    } else {
        addMessage("Le prénom est obligatoire");
    }

    if (cp !== null) {
        if (isNaN(cp))
            addMessage("Le code postal ne doit pas comporter de lettres, ni de caractères spéciaux");
        
        if (cp.length !== 5 && !Number.isInteger(cp))
            addMessage("Le code postal doit avoir exactement 5 chiffres");
    } else {
        addMessage("Code postal obligatoire");
    }

    if (mdp !== null) {
        if (mdp.length < 8)
            addMessage("Le mot de passe doit contenir au moins 8 caractères");
    } else {
        addMessage("Mot de passe obligatoire");
    }

    if (cmdp !== null) {
        if (mdp !== cmdp)
            addMessage("Les mots de passe ne correspondent pas");
    } else {
        addMessage("Mot de passe à confirmer est obligatoire");
    }

    if (listErrors.innerHTML === "")
        listErrors.innerHTML += "<li style='color: green'>Pas d'erreurs dans le formulaire.</li>"
}

/**
 * Fonction qui permet d'ajouter un message de succès ou d'erreur sous forme de liste.
 * 
 * @param {string} text 
 */
function addMessage(text, status = 'error') {
    if (status === 'error')
        listErrors.innerHTML += "<li style='color: red'>" + text + "</li>"
    if (status === 'success')
        listErrors.innerHTML += "<li style='color: green'>" + text + "</li>"
} 