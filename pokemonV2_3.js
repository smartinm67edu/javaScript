// Función para leer cookies
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find(c => c.startsWith(`${name}=`));
    return cookie ? JSON.parse(decodeURIComponent(cookie.split("=")[1])) : null;
}

// Recuperar los Pokémon seleccionados desde las cookies
const playerPokemon = getCookie("playerPokemon");
const opponentPokemon = getCookie("opponentPokemon");

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

// Actualizar las barras de vida
function updateHealthBar(containerId, currentHP, maxHP) {
    const healthBar = document.getElementById(`${containerId}-health-bar`);
    const healthPercentage = (currentHP / maxHP) * 100; // Calcula el porcentaje de vida restante
    healthBar.style.width = `${Math.max(0, healthPercentage)}%`; // Ajusta el ancho de la barra
    healthBar.style.backgroundColor = 
        healthPercentage > 50 ? "#4caf50" : 
        healthPercentage > 20 ? "#ff9800" : 
        "#f44336"; // Cambia el color según el porcentaje
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
    updateHealthBar("opponentPokemon", opponentHP, opponentPokemon.hp); // Actualiza la barra de vida
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
    updateHealthBar("playerPokemon", playerHP, playerPokemon.hp); // Actualiza la barra de vida
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
    updateHealthBar("playerPokemon", playerHP, playerPokemon.hp); // Actualiza la barra de vida
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
    updateHealthBar("playerPokemon", playerHP, playerPokemon.hp); // Inicializa la barra de vida del jugador
    updateHealthBar("opponentPokemon", opponentHP, opponentPokemon.hp); // Inicializa la barra de vida del oponente
    updateBattleLog("¡El combate comienza!");
}

// Eventos
attackButton.addEventListener("click", playerAttack);
healButton.addEventListener("click", playerHeal);

// Iniciar el combate
initializeBattle();
