const player = JSON.parse(localStorage.getItem("playerPokemon"));
const opponent = JSON.parse(localStorage.getItem("opponentPokemon"));

function startBattle() {
    const battleField = document.getElementById("battleField");
    battleField.innerHTML = `
        <div>
            <h2>${player.name}</h2>
            <img src="${player.isShiny ? player.shinyImg : player.img}" alt="${player.name}">
            <p>HP: ${player.hp}</p>
        </div>
        <div>
            <h2>${opponent.name}</h2>
            <img src="${opponent.img}" alt="${opponent.name}">
            <p>HP: ${opponent.hp}</p>
        </div>
    `;
}

window.onload = startBattle;
