var readlineSync = require('readline-sync');
let num1 = readlineSync.question("Que primer numero quieres introducir ")
let num2 = readlineSync.question("Que segundo numero quieres introducir ")
let num3 = readlineSync.question("Que tercer numero quieres introducir ")
if(num1<num2<num3){
    console.log("el numero 3 es el mayor")
}else if (num2<num1){
    console.log("el numero 1 es el mayor")
}else if (num2>num1){
    console.log("el numero 2 es el mayor")
}