// Recuperar los Pokémon seleccionados desde localStorage
const playerPokemon = JSON.parse(localStorage.getItem("playerPokemon"));
const opponentPokemon = JSON.parse(localStorage.getItem("opponentPokemon"));

// Elementos del DOM
const playerPokemonContainer = document.getElementById("playerPokemon");
const opponentPokemonContainer = document.getElementById("opponentPokemon");
const battleLog = document.getElementById("battleLog");
const attackButton = document.getElementById("attackButton");
const healButton = document.getElementById("healButton");

// Inicializar las estadísticas de combate
let playerHP = playerPokemon.hp;
let opponentHP = opponentPokemon.hp;
let playerTurn = true;

// Mostrar los Pokémon en pantalla
function renderPokemon(pokemon, container, hp) {
    container.innerHTML = `
        <h3>${pokemon.name} ${pokemon.isShiny ? "(Shiny)" : ""}</h3>
        <img src="${pokemon.isShiny ? pokemon.shinyImg : pokemon.img}" alt="${pokemon.name}">
        <p>HP: <span id="${container.id}-hp">${hp}</span></p>
        <p>Ataque: ${pokemon.attack}</p>
        <p>Defensa: ${pokemon.defense}</p>
    `;
}

// Actualizar el log de combate
function updateBattleLog(message) {
    const logEntry = document.createElement("p");
    logEntry.textContent = message;
    battleLog.appendChild(logEntry);
    battleLog.scrollTop = battleLog.scrollHeight; // Desplazar al final
}

// Calcular el daño
function calculateDamage(attacker, defender) {
    const baseDamage = attacker.attack - defender.defense / 2;
    return Math.max(Math.floor(Math.random() * baseDamage + 1), 1); // Daño mínimo de 1
}

// Turno del jugador: atacar
function playerAttack() {
    if (!playerTurn) return; // No es el turno del jugador
    const damage = calculateDamage(playerPokemon, opponentPokemon);
    opponentHP -= damage;
    opponentHP = Math.max(opponentHP, 0); // No permitir HP negativo
    document.getElementById("opponentPokemon-hp").textContent = opponentHP;
    updateBattleLog(`${playerPokemon.name} hizo ${damage} de daño a ${opponentPokemon.name}!`);
    checkBattleOutcome();
    playerTurn = false;
    setTimeout(opponentAttack, 1500); // Esperar 1.5 segundos para el turno del oponente
}

// Turno del jugador: curarse
function playerHeal() {
    if (!playerTurn) return; // No es el turno del jugador
    const healAmount = Math.floor(playerPokemon.hp * 0.5); // Curar el 50% del HP máximo
    playerHP = Math.min(playerHP + healAmount, playerPokemon.hp); // No exceder el HP máximo
    document.getElementById("playerPokemon-hp").textContent = playerHP;
    updateBattleLog(`${playerPokemon.name} se curó ${healAmount} puntos de vida.`);
    playerTurn = false;
    setTimeout(opponentAttack, 1500); // Esperar 1.5 segundos para el turno del oponente
}

// Turno del oponente
function opponentAttack() {
    if (playerTurn) return; // No es el turno del oponente
    const damage = calculateDamage(opponentPokemon, playerPokemon);
    playerHP -= damage;
    playerHP = Math.max(playerHP, 0); // No permitir HP negativo
    document.getElementById("playerPokemon-hp").textContent = playerHP;
    updateBattleLog(`${opponentPokemon.name} hizo ${damage} de daño a ${playerPokemon.name}!`);
    checkBattleOutcome();
    playerTurn = true;
}

// Comprobar el resultado del combate
function checkBattleOutcome() {
    if (opponentHP <= 0) {
        updateBattleLog(`¡${playerPokemon.name} ganó la batalla!`);
        endBattle();
    } else if (playerHP <= 0) {
        updateBattleLog(`¡${opponentPokemon.name} ganó la batalla!`);
        endBattle();
    }
}

// Finalizar la batalla
function endBattle() {
    attackButton.disabled = true;
    healButton.disabled = true;
    setTimeout(() => {
        alert("Fin del combate");
        window.location.href = "pokemonV2_1.html"; // Volver a la selección
    }, 2000);
}

// Inicializar combate
function initializeBattle() {
    renderPokemon(playerPokemon, playerPokemonContainer, playerHP);
    renderPokemon(opponentPokemon, opponentPokemonContainer, opponentHP);
    updateBattleLog("¡El combate comienza!");
}

// Eventos
attackButton.addEventListener("click", playerAttack);
healButton.addEventListener("click", playerHeal);

// Iniciar el combate
initializeBattle();
