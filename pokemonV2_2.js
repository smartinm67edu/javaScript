// Recuperar Pokémon seleccionados desde localStorage
const playerPokemon = JSON.parse(localStorage.getItem("playerPokemon"));

// Crear un Pokémon oponente con datos específicos (simulado)
function generarPokemonOponente() {
    return {
        id: 25,
        name: "Pikachu",
        img: "https://projectpokemon.org/images/normal-sprite/pikachu.gif",
        shinyImg: "https://projectpokemon.org/images/shiny-sprite/pikachu.gif",
        types: ["Electric"],
        attack: 55,
        defense: 40,
        hp: 35,
        isShiny: Math.random() < 0.1 // 10% de probabilidad de ser Shiny
    };
}

// Generar y guardar el Pokémon oponente
const opponentPokemon = generarPokemonOponente();
localStorage.setItem("opponentPokemon", JSON.stringify(opponentPokemon));

// Mostrar Pokémon en la pantalla VS
function mostrarVS() {
    // Contenedores del DOM
    const playerContainer = document.getElementById("playerPokemon");
    const opponentContainer = document.getElementById("opponentPokemon");

    // Mostrar Pokémon del jugador
    playerContainer.innerHTML = `
        <h3>${playerPokemon.name} ${playerPokemon.isShiny ? "(Shiny)" : ""}</h3>
        <img src="${playerPokemon.isShiny ? playerPokemon.shinyImg : playerPokemon.img}" alt="${playerPokemon.name}">
        <p>Tipo: ${playerPokemon.types.join(", ")}</p>
        <p>Ataque: ${playerPokemon.attack}</p>
        <p>Defensa: ${playerPokemon.defense}</p>
        <p>HP: ${playerPokemon.hp}</p>
    `;

    // Mostrar Pokémon del oponente
    opponentContainer.innerHTML = `
        <h3>${opponentPokemon.name} ${opponentPokemon.isShiny ? "(Shiny)" : ""}</h3>
        <img src="${opponentPokemon.isShiny ? opponentPokemon.shinyImg : opponentPokemon.img}" alt="${opponentPokemon.name}">
        <p>Tipo: ${opponentPokemon.types.join(", ")}</p>
        <p>Ataque: ${opponentPokemon.attack}</p>
        <p>Defensa: ${opponentPokemon.defense}</p>
        <p>HP: ${opponentPokemon.hp}</p>
    `;
}

// Función para comenzar el combate
function comenzarCombate() {
    window.location.href = "pokemonV2_3.html"; // Redirigir a la pantalla de combate
}

// Llamar a mostrarVS al cargar la página
window.onload = mostrarVS;
