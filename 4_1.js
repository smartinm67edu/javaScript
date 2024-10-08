const caracteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var readlineSync = require('readline-sync');
var n = readlineSync.question("Como de grande quieres que sea la contraseña?")
let contraseña = ("")
for (let i=0;i<n;i++){
    const randomIndex = Math.floor(Math.random() * caracteres.length)
    contraseña+=(caracteres[randomIndex]);
}
console.log("La contraseña generada es "+contraseña)