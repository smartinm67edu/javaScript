window.onload = function () {
    const player = JSON.parse(localStorage.getItem("playerPokemon")) || {};
    const opponent = {
        id: 7,
        name: "Squirtle",
        img: "https://projectpokemon.org/images/normal-sprite/squirtle.gif",
        attack: 48,
        defense: 65,
        speed: 43
    };

    document.getElementById("player").innerHTML = `
        <h2>${player.name}</h2>
        <img src="${player.img}" alt="${player.name}">
        <p>Ataque: ${player.attack}</p>
        <p>Defensa: ${player.defense}</p>
        <p>Velocidad: ${player.speed}</p>
    `;

    document.getElementById("opponent").innerHTML = `
        <h2>${opponent.name}</h2>
        <img src="${opponent.img}" alt="${opponent.name}">
        <p>Ataque: ${opponent.attack}</p>
        <p>Defensa: ${opponent.defense}</p>
        <p>Velocidad: ${opponent.speed}</p>
    `;

    setTimeout(() => {
        window.location.href = "battle.html";
    }, 5000); // Navega automáticamente a la batalla.
};
