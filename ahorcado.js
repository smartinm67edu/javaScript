
const palabras = ["arbol", "nieve", "cielo", "perro", "playa", "casas", "fruta", "mujer", "fuerte", "beso"];
const palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
let palabraGuiones = Array(palabraSecreta.length).fill("_");
let intentosRestantes = 6;

function actualizarDisplay() {
  document.getElementById("wordDisplay").textContent = `Palabra: ${palabraGuiones.join(" ")}`;
  document.getElementById("guesses").textContent = `Intentos restantes: ${intentosRestantes}`;
}

function guessLetter() {
  const input = document.getElementById("letterInput");
  const letra = input.value.toLowerCase();
  input.value = "";
  input.focus();

  if (!letra || letra.length !== 1 || !/^[a-z]$/.test(letra)) {
    document.getElementById("message").textContent = "Por favor, ingresa una letra válida.";
    return;
  }

  if (palabraGuiones.includes(letra) || palabraSecreta.includes(letra)) {
    document.getElementById("message").textContent = "Ya adivinaste esa letra. Intenta otra.";
    return;
  }

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
  } else {
    document.getElementById("message").textContent = `¡Bien hecho! La letra "${letra}" está en la palabra.`;
  }

  actualizarDisplay();

  if (intentosRestantes === 0) {
    document.getElementById("message").textContent = `¡Perdiste! La palabra era "${palabraSecreta}".`;
    document.getElementById("letterInput").disabled = true;
  } else if (!palabraGuiones.includes("_")) {
    document.getElementById("message").textContent = "¡Felicidades! Has adivinado la palabra.";
    document.getElementById("letterInput").disabled = true;
  }
}

actualizarDisplay();
