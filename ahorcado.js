const palabras = ["arbol", "nieve", "cielo", "perro", "playa", "casas", "fruta", "mujer", "fuerte", "beso"];
const palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
let palabraGuiones = Array(palabraSecreta.length).fill("_");
let intentosRestantes = 6;
let letrasAdivinadas = [];
const emojis = ["😙", "🙎‍♂️", "🦾", "💪", "🦿", "🦵"];
const emojiButtons = document.querySelectorAll(".cuerpo button");

function actualizarDisplay() {
  document.getElementById("wordDisplay").textContent = `Palabra: ${palabraGuiones.join(" ")}`;
  document.getElementById("guesses").textContent = `Intentos restantes: ${intentosRestantes}`;
}

function actualizarEmojis() {
  const errores = 6 - intentosRestantes;
  for (let i = 0; i < errores; i++) {
    emojiButtons[i].textContent = "❌"; // Cambia el emoji por una cruz en caso de error
  }
}

function mostrarEmojiPerdedor() {
  document.getElementById("emojiGrande").textContent = "💀"; 
  document.getElementById("emojiGrande").style.display = "block"; 
}

function guessLetter() {
  const input = document.getElementById("letterInput");
  const letra = input.value.toLowerCase();
  input.value = "";
  input.focus();

  // Verificar que la entrada sea una letra válida
  if (!letra || letra.length !== 1 || !/^[a-z]$/.test(letra)) {
    document.getElementById("message").textContent = "Por favor, ingresa una letra válida.";
    return;
  }

  // Verificar si la letra ya fue adivinada
  if (letrasAdivinadas.includes(letra)) {
    document.getElementById("message").textContent = "Ya adivinaste esa letra. Intenta otra.";
    return;
  }

  letrasAdivinadas.push(letra); // Guardar la letra adivinada

  let letraCorrecta = false;
  for (let i = 0; i < palabraSecreta.length; i++) {
    if (palabraSecreta[i] === letra) {
      palabraGuiones[i] = letra;
      letraCorrecta = true;
    }
  }

  if (!letraCorrecta) {
    intentosRestantes--;
    document.getElementById("message").textContent = `La letra "${letra}" no está en la palabra.`;
    actualizarEmojis(); // Actualiza los emojis cuando el jugador falla
  } else {
    document.getElementById("message").textContent = `¡Bien hecho! La letra "${letra}" está en la palabra.`;
  }

  actualizarDisplay();

  // Verificar si el juego ha terminado
  if (intentosRestantes === 0) {
    document.getElementById("message").textContent = `¡Perdiste! La palabra era "${palabraSecreta}".`;
    document.getElementById("letterInput").disabled = true;
    mostrarEmojiPerdedor(); // Mostrar el emoji de calavera si ha perdido
  } else if (!palabraGuiones.includes("_")) {
    document.getElementById("message").textContent = "¡Felicidades! Has adivinado la palabra.";
    document.getElementById("letterInput").disabled = true;
  }
}

actualizarDisplay();
