var readlineSync = require('readline-sync');
var num = readlineSync.question("Que numero quieres introducir")
if (num%2==0){
    console.log("El numero es par")
}else{
    console.log("El numero es impar")
}