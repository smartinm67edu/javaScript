let selectedPokemon; // Pokémon del jugador
let opponentPokemon; // Pokémon del oponente

// Actualiza la selección del jugador y pasa a VS
function seleccionarPokemon(id) {
    selectedPokemon = pokemons.find(p => p.id === id);
    seleccionarOponente(); // Genera oponente automáticamente
    mostrarPantallaVS();
}

// Generar oponente aleatorio
function seleccionarOponente() {
    opponentPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
}

// Mostrar pantalla VS
function mostrarPantallaVS() {
    const playerDiv = document.getElementById("playerPokemon");
    const opponentDiv = document.getElementById("opponentPokemon");

    // Detalles del Pokémon del jugador
    playerDiv.innerHTML = `
        <h3>${selectedPokemon.name}</h3>
        <img src="${selectedPokemon.img}" alt="${selectedPokemon.name}">
        <p>Tipos: ${selectedPokemon.types.join(", ")}</p>
    `;

    // Detalles del Pokémon del oponente
    opponentDiv.innerHTML = `
        <h3>${opponentPokemon.name}</h3>
        <img src="${opponentPokemon.img}" alt="${opponentPokemon.name}">
        <p>Tipos: ${opponentPokemon.types.join(", ")}</p>
    `;

    // Cambiar a la pantalla VS
    goToScreen("pantalla-vs");
}

// Cambiar entre pantallas
function goToScreen(screenId) {
    const screens = document.querySelectorAll(".pantalla");
    screens.forEach(screen => screen.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
}

// Avanzar al combate
function iniciarCombate() {
    goToScreen("pantalla-combate");
    iniciarLogicaCombate();
}
