// Función para leer cookies
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find(c => c.startsWith(`${name}=`));
    return cookie ? JSON.parse(decodeURIComponent(cookie.split("=")[1])) : null;
}

// Mostrar Pokémon en la pantalla VS
function mostrarVS() {
    // Recuperar Pokémon del jugador y del oponente desde las cookies
    const playerPokemon = getCookie("playerPokemon");
    const opponentPokemon = getCookie("opponentPokemon");

    // Contenedores del DOM
    const playerContainer = document.getElementById("playerPokemon");
    const opponentContainer = document.getElementById("opponentPokemon");

    if (playerPokemon && opponentPokemon) {
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
    } else {
        playerContainer.innerHTML = `<p>No se encontró un Pokémon seleccionado.</p>`;
        opponentContainer.innerHTML = `<p>No se encontró un oponente asignado.</p>`;
    }
}

// Función para comenzar el combate
function comenzarCombate() {
    window.location.href = "pokemonV2_3.html"; // Redirigir a la pantalla de combate
}

// Llamar a mostrarVS al cargar la página
window.onload = mostrarVS;
