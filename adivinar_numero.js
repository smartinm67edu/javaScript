let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

document.getElementById("checkButton").addEventListener("click", adivina);

function adivina() {
    const guessInput = document.getElementById("guessInput");
    const mensage = document.getElementById("mensage");
    const verIntentos = document.getElementById("attempts");

    const num = parseInt(guessInput.value); 
    intentos++;

    if (isNaN(num) || num < 1 || num > 100) {
        mensage.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        mensage.className = "";
        return;
    }

    if (num > numeroAleatorio) {
        mensage.textContent = "El número es más pequeño";
        mensage.className = "high";
    } else if (num < numeroAleatorio) {
        mensage.textContent = "El número es más grande";
        mensage.className = "low";
    } else {
        mensage.textContent = `¡Correcto! El número secreto era ${numeroAleatorio}. Lo lograste en ${intentos} intentos.`;
        mensage.className = "correct";
        guessInput.disabled = true;
    }

    verIntentos.textContent = `Intentos: ${intentos}`;
    guessInput.value = ""; 
    guessInput.focus();
}
