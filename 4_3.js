function fibonacci(n) {
    let secuencia = [0, 1]; 

    for (let i = 2; i < n; i++) {
        secuencia[i] = secuencia[i - 1] + secuencia[i - 2]; 
    }

    return secuencia;
}

let n = 10; 
let result = fibonacci(n);
console.log("Secuencia hasta el termino 10: " + result.join(', '));
