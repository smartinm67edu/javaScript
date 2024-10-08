var readlineSync = require('readline-sync');
let frase = readlineSync.question("Que frase quieres introducir?")

for(let i =frase.length;i>=0;i--){
    console.log(frase[i])
}