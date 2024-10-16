let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

document.getElementById("checkButton").addEventListener("click", checkGuess);

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    const num = parseInt(guessInput.value); 
    intentos++;

    if (isNaN(num) || num < 1 || num > 100) {
        message.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        message.className = "";
        return;
    }

    if (num > numeroAleatorio) {
        message.textContent = "El número es más pequeño";
        message.className = "high";
    } else if (num < numeroAleatorio) {
        message.textContent = "El número es más grande";
        message.className = "low";
    } else {
        message.textContent = `¡Correcto! El número secreto era ${numeroAleatorio}. Lo lograste en ${intentos} intentos.`;
        message.className = "correct";
        guessInput.disabled = true;
    }

    attemptsDisplay.textContent = `Intentos: ${intentos}`;
    guessInput.value = ""; 
    guessInput.focus();
}
