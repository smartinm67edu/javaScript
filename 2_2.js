var readlineSync = require('readline-sync');
let res = 1;
let num = readlineSync.question("Que numero quieres introducir")

while (num>=1){
    res = res*num;
    num--;
}
console.log("El factorial es : " + res)