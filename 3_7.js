var readlineSync = require('readline-sync');
var nota = parseInt(readlineSync.question("Que nota quieres introducir"))

if (nota<60&nota>=0){
    console.log("has reprobado")
}else if(nota>=60&nota<=100){
    console.log("has aprobado")
}