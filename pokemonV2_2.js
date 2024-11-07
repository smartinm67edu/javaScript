const playerPokemon = JSON.parse(localStorage.getItem("playerPokemon"));
const opponentPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

function showVsScreen() {
    document.getElementById("playerPokemon").innerHTML = `
        <h3>${playerPokemon.name} ${playerPokemon.isShiny ? "(Shiny)" : ""}</h3>
        <img src="${playerPokemon.isShiny ? playerPokemon.shinyImg : playerPokemon.img}" alt="${playerPokemon.name}">
    `;
    document.getElementById("opponentPokemon").innerHTML = `
        <h3>${opponentPokemon.name}</h3>
        <img src="${opponentPokemon.img}" alt="${opponentPokemon.name}">
    `;

    setTimeout(() => {
        localStorage.setItem("opponentPokemon", JSON.stringify(opponentPokemon));
        window.location.href = "pokemonV2_3.html";
    }, 4000);
}

window.onload = showVsScreen;
