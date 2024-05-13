(function() {
    'use strict';

    console.log('Script started');

    const emailAddress = 'hanfous11@gmail.com';
    let emailFound = false;

    function startScript() {
        console.log('Starting script');

        if (emailFound) {
            console.log('Email already filled, exiting script');
            return;
        }

        const emailFields = document.querySelectorAll('.form-control[type="text"]');

        emailFields.forEach(function(field) {
            if (emailFound) {
                return; // Stop iterating if email is found
            }

            console.log('Checking email field');

            // Vérifier si le champ est visible et actif
            if (isVisible(field) && !field.disabled && !field.readOnly) {
                console.log('Email field found');

                // Cliquer sur le champ pour le mettre au premier plan
                simulateClick(field);

                // Remplir le champ avec l'adresse email
                field.value = emailAddress;
                field.dispatchEvent(new Event('input', { bubbles: true }));
                emailFound = true; // Set flag to stop further iteration

                console.log('Inputting email address');

                // Cliquer sur le bouton 'Verify' après avoir rempli l'email
                const verifyButton = document.getElementById('btnVerify');
                if (verifyButton) {
                    console.log('Clicking Verify button');
                    simulateClick(verifyButton);
                }
            }
        });
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
