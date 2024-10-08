var readlineSync = require('readline-sync');
var num = readlineSync.question("Que numero quieres introducir")
if (num<10){
    console.log("El numero es menor")
}else{
    console.log("El numero es mayor")
}


