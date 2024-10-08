var readlineSync = require('readline-sync');
let palabra = readlineSync.question("Que palabra quieres introducir")

let contador_vocales = 0;
let vocales=['a', 'e', 'i', 'o', 'u'];
for(let i=0;i<=palabra.length;i++){
    if (vocales.includes(palabra[i])){
        contador_vocales++;
    }
    
}
console.log("hay "+contador_vocales)