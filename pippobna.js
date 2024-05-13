(function() {
    'use strict';

    // Attend que la page soit entièrement chargée
    window.addEventListener('load', function() {
        // Recherche le bouton par son texte d'appellation
        let buttons = document.querySelectorAll('a.nav-link.new-app-active');

        // Parcourt tous les boutons pour trouver celui avec le texte 'Book New Appointment'
        for (let button of buttons) {
            if (button.textContent.trim() === 'Book New Appointment') {
                // Clique sur le bouton trouvé
                button.click();
                return; // Arrête la boucle une fois que le bouton est trouvé et cliqué
            }
        }

        console.log("Le bouton 'Book New Appointment' n'a pas été trouvé.");
    }, false);
})();
