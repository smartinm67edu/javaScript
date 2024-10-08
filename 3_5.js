var readlineSync = require('readline-sync');
var num = readlineSync.question("Que numero quieres introducir")
if (num%2==0){
    console.log("El numero no es primo")
}else{
    console.log("El numero es primo")
}