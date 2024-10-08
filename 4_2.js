var readlineSync = require('readline-sync');
var fechaNacimiento = readlineSync.question("Cual es tu fecha de nacimiento? en dia-mes-año")
let fechaNacimientoFecha = new Date(fechaNacimiento);
let ahora = new Date();
let diferenciaMilisegundos = ahora - fechaNacimientoFecha;
let diferenciaAnios = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365.25));

console.log(`La diferencia es de ${diferenciaAnios} años.`);1