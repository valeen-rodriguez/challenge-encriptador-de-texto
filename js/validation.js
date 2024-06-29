document.addEventListener('DOMContentLoaded', function() {
    var textarea = document.getElementById('id-textarea-placeholder');
    var warningMessage = document.querySelector('.p-i-warning-message');

    /*verificamos si en el textarea hay mayusculas o acentos*/
    textarea.addEventListener('input', function() {
        var text = textarea.value;
        var uppercaseOrAccent = /[A-ZÁÉÍÓÚáéíóú]/.test(text);
        
        if (uppercaseOrAccent) {
            warningMessage.classList.add('warning');
        } else {
            warningMessage.classList.remove('warning');
        }
    });

    /*si hay mayusculas o acento, no encripta y desencripta*/
    function showError() {
        var outputText = document.getElementById("p-null-text");
        var outputImage = document.getElementById("person-image");

        outputText.innerHTML = `<span>Ningún mensaje fue encontrado</span><br>Ingresa el texto que desees encriptar o desencriptar.`;
        outputImage.style.display = '';
        toggleCopyButton();
    }

    /*botones de encriptar y desencriptar*/
    document.getElementById('id-button-encrypt').addEventListener('click', function() {
        var text = textarea.value;
        var uppercaseOrAccent = /[A-ZÁÉÍÓÚáéíóú]/.test(text);

        if (uppercaseOrAccent) {
            showError();
        } else {
            //error
        }
    });

    document.getElementById('id-button-decrypt').addEventListener('click', function() {
        var text = textarea.value;
        var uppercaseOrAccent = /[A-ZÁÉÍÓÚáéíóú]/.test(text);

        if (uppercaseOrAccent) {
            showError();
        } else {
            //error
        }
    });
});