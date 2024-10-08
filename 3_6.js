class areaCirculo {
    constructor(pi, radio) {
        this.pi = 3,1415;
        this.radio = radio;
    }


    circulo() {
        area = this.pi*(radio*radio);
        console.log(area);
    }
}
var readlineSync = require('readline-sync');
var radio = readlineSync.question("Que radio tiene el circulo?")
    radio = parseFloat(radio);
let circulo1= new areaCirculo(radio);
    circulo1.areaCirculo();
