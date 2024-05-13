(function() {
    'use strict';

    window.addEventListener('load', function() {
        setTimeout(function() {
            var btn = document.getElementById('btnSenderificationCode');
            if (btn) {
                btn.click();
            } else {
                console.error("Button not found!");
            }
        }, 2000); // 2000 milliseconds = 2 second
    });

})();
