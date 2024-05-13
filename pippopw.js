(function() {
    'use strict';

    // Mot de passe à utiliser
    const password = 'Oasis@678';

    // Fonction pour rechercher et remplir les champs de mot de passe dynamiques
    function remplirMotDePasse() {
        // Sélectionner tous les champs de mot de passe dynamiques
        const passwordFields = document.querySelectorAll('input[type="password"][class*="entry-disabled"]');

        // Parcourir tous les champs de mot de passe
        passwordFields.forEach(function(field) {
            // Vérifier si le champ est visible et actif
            if (isVisible(field) && !field.disabled && !field.readOnly) {
                // Remplir le champ avec le mot de passe spécifié
                field.value = password;
            }
        });
    }

    // Fonction pour vérifier si un élément est visible
    function isVisible(element) {
        return element.offsetWidth > 0 || element.offsetHeight > 0;
    }

    // Exécuter la fonction lorsque la page est entièrement chargée
    window.addEventListener('load', function() {
        remplirMotDePasse();
    });
})();
