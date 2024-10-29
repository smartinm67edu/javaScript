let carrito = [];
let total = 0;
let array = [0, 0, 0, 0]; // Inicializa el array con valores de ejemplo, incluyendo la posición 3

// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar el carrito en formato JSON
}

// Función para cargar el carrito desde localStorage
function cargarCarrito() {
    let carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado); // Convertir de JSON a array
        mostrarCarrito(); 
        calcularTotal();  
    }
}

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio, cantidad) {
    let carritoGuardado = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];

    // Si el producto ya está en carritoGuardado
    if (carritoGuardado.some(item => item.nombre === nombre)) {
        array[3] += 1;
        const productoExistente = carrito.find(item => item.nombre === nombre);
        
        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            carrito.push({ nombre, precio, cantidad });
        }
    } else {
        carrito.push({ nombre, precio, cantidad });
    }

    // Guardar el carrito y actualizar la interfaz
    guardarCarrito();
    mostrarCarrito();
    calcularTotal();
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';

    carrito.forEach((producto, index) => {
        carritoDiv.innerHTML += `<p>${producto.nombre} - ${producto.precio}€ - ${producto.cantidad} <button onclick="eliminarDelCarrito(${index})">Eliminar</button></p>`;
    });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    guardarCarrito();
    mostrarCarrito();
    calcularTotal();
}

// Función para calcular el total del carrito
function calcularTotal() {
    // Calcula el total sumando el precio por la cantidad de cada producto
    total = carrito.reduce((sum, producto) => sum + (producto.precio * producto.cantidad), 0); 

    // Guarda el total en una cookie con una expiración de 7 días
    document.cookie = `total=${total}; path=/; max-age=${7 * 24 * 60 * 60}`;

    // Actualiza el elemento del DOM con el total
    document.getElementById('total').textContent = `Total: ${total}€`;
}

// Llamar a la función de cargar carrito al inicio
window.onload = function() {
    cargarCarrito();
};1
