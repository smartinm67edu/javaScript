var readlineSync = require('readline-sync');
let num1 = readlineSync.question("Que primer numero quieres introducir ")
let num2 = readlineSync.question("Que seguundo numero quieres introducir ")
let accion = readlineSync.question("que quieres hacer 1.+ 2.* 3./ 4.- ")
let resto = 0;
switch(accion){
    case "1":
        console.log(resto = num1 + num2)
        break;
    case "2":
        console.log(resto = num1 * num2)
        break;
    case "3":
        console.log(resto = num1 / num2)
        break;
    case "4":
        console.log(resto = num1 - num2)
        break;

}
