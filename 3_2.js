var readlineSync = require('readline-sync');
let frase = readlineSync.question("Que frase quieres introducir?")
let cont =0;

let palabra = frase.split(" ")
for(let i =0;i<palabra.length;i++){
    console.log(palabra[i])
    cont++;
}
console.log(cont)