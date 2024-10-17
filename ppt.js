function jugar(eleccion) {
    const opciones = ["piedra", "papel", "tijera"];
    const elecion_ordenador = opciones[Math.floor(Math.random() * opciones.length)];
    
    let resultado;
  
    if (eleccion === elecion_ordenador) {
      resultado = "Empate";
    } else if (
      (eleccion === "piedra" && elecion_ordenador === "tijera") ||
      (eleccion === "papel" && elecion_ordenador === "piedra") ||
      (eleccion === "tijera" && elecion_ordenador === "papel")
    ) {
      resultado = "¡Ganaste!";
    } else {
      resultado = "Perdiste";
    }
  
    document.getElementById("result").textContent = 
      `Elegiste ${eleccion}. La computadora eligió ${elecion_ordenador}. ${resultado}`;
  }
  