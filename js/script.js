/*encriptar texto usando patrones específicos*/
function encriptar() {
    let texto = document.getElementById("id-textarea-placeholder").value;
    let outputText = document.getElementById("p-null-text");
    let outputImage = document.getElementById("person-image");

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.length !== 0) {
        outputText.innerHTML = `${textoCifrado}`;
        outputImage.style.display = 'none';
    } else {
        outputText.innerHTML = `<span>Ningún mensaje fue encontrado</span><br>Ingresa el texto que desees encriptar o desencriptar.`;
        outputImage.style.display = 'block';
    }

    toggleCopyButton();
}

/*desencriptar texto usando los mismos patrones*/
function desencriptar() {
    let texto = document.getElementById("id-textarea-placeholder").value;
    let outputText = document.getElementById("p-null-text");
    let outputImage = document.getElementById("person-image");

    let textoDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length !== 0) {
        outputText.innerHTML = `${textoDesencriptado}`;
        outputImage.style.display = 'none';
    } else {
        outputText.innerHTML = `<span>Ningún mensaje fue encontrado</span><br>Ingresa el texto que desees encriptar o desencriptar.`;
        outputImage.style.display = 'block';
    }

    toggleCopyButton();
}

/*mostrar u ocultar el botón de copiar según el contenido de p-null-text*/
function toggleCopyButton() {
    let outputText = document.getElementById('p-null-text').innerText.trim();
    let copyButton = document.getElementById('id-button-copy');
    
    if (outputText && outputText !== 'Ningún mensaje fue encontrado\nIngresa el texto que desees encriptar o desencriptar.') {
        copyButton.style.display = 'block';
    } else {
        copyButton.style.display = 'none';
    }
}

/* se asegura que el botón de copiar esté oculto al cargar la página*/
toggleCopyButton();


/*encriptar el texto al hacer clic en el botón de encriptar*/
document.getElementById('id-button-encrypt').addEventListener('click', function() {
    encriptar();
});

/*desencriptar texto al hacer clic en el botón de desencriptar*/
document.getElementById('id-button-decrypt').addEventListener('click', function() {
    desencriptar();
});


/* copiar texto al portapapeles al hacer clic en el botón de copiar*/
document.getElementById('id-button-copy').addEventListener('click', function() {
    let copyText = document.getElementById('p-null-text').innerText.trim();
    
    if (copyText) {
        navigator.clipboard.writeText(copyText)
            .then(() => {
                //se copia la palabra encriptada/desencriptada
            })
            .catch(err => {
                console.error(err);
            });
    }
});