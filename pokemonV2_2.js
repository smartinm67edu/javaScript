let playerPokemon = null; // Guardará el Pokémon del jugador
let opponentPokemon = null; // Guardará el Pokémon del oponente

function seleccionarPokemon(id, cardElement) {
    // Resaltar selección del jugador
    if (selectedPokemonId !== null) {
        const previousSelectedCard = document.querySelector(
            `.pokemon-card[data-id="${selectedPokemonId}"]`
        );
        if (previousSelectedCard) {
            previousSelectedCard.classList.remove("selected");
        }
    }
    selectedPokemonId = id;
    cardElement.classList.add("selected");

    // Guardar el Pokémon seleccionado
    playerPokemon = pokemons.find(p => p.id === id);
}

function seleccionarOponente() {
    // Selección aleatoria de un oponente
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    opponentPokemon = pokemons[randomIndex];
}

function goToScreen(screenId) {
    document.querySelectorAll(".pantalla").forEach(screen => {
        screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
}

function iniciarPresentacionVS() {
    if (!playerPokemon) {
        alert("¡Selecciona un Pokémon antes de continuar!");
        return;
    }

    seleccionarOponente();

    // Configurar los detalles del enfrentamiento
    const playerDisplay = document.getElementById("playerPokemon");
    const opponentDisplay = document.getElementById("opponentPokemon");
    const vsText = document.querySelector(".vs-text");

    playerDisplay.innerHTML = `
        <img src="${playerPokemon.img}" alt="${playerPokemon.name}">
        <h3>${playerPokemon.name}</h3>
        <p>Tipos: ${playerPokemon.types.join(", ")}</p>
    `;
    opponentDisplay.innerHTML = `
        <img src="${opponentPokemon.img}" alt="${opponentPokemon.name}">
        <h3>${opponentPokemon.name}</h3>
        <p>Tipos: ${opponentPokemon.types.join(", ")}</p>
    `;

    // Añadir animación
    vsText.classList.add("animate-vs");
    setTimeout(() => {
        vsText.classList.remove("animate-vs");
    }, 2000);

    goToScreen("pantalla-vs");
}
