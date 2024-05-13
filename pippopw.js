(function() {
    'use strict';

    console.log('Script started');

    const password = 'Oasis@678'; // Remplacez par votre mot de passe
    let passwordFound = false;

    function startScript() {
        console.log('Starting script');

        if (passwordFound) {
            console.log('Password already filled, exiting script');
            return;
        }

        const passwordField = document.querySelector('input[type="password"]');

        if (passwordField && isVisible(passwordField) && !passwordField.disabled && !passwordField.readOnly) {
            console.log('Password field found');

            // Cliquer sur le champ pour le mettre au premier plan
            simulateClick(passwordField);

            // Remplir le champ avec le mot de passe
            passwordField.value = password;
            passwordField.dispatchEvent(new Event('input', { bubbles: true }));
            passwordFound = true;

            console.log('Inputting password');
        }
    }

    // Fonction pour vérifier si un élément est visible
    function isVisible(element) {
        return element.offsetWidth > 0 || element.offsetHeight > 0;
    }

    // Fonction pour simuler un clic sur un élément
    function simulateClick(element) {
        console.log('Simulating click');
        const event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        element.dispatchEvent(event);
    }

    window.addEventListener('load', startScript);
})();
