var readlineSync = require('readline-sync');
let num = readlineSync.question("Que numero quieres introducir")
for(i=0;i<10;i++){
    res=num*i;
    console.log(res)
}