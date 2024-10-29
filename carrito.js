let carrito = [];
let total = 0;

// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar el carrito en formato JSON
}

// Función para cargar el carrito desde localStorage
function cargarCarrito() {
    let carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado); // Convertir de JSON a array
        mostrarCarrito(); // Actualizar la vista del carrito
        calcularTotal();  // Calcular el total de nuevo
    }
}

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    // Añadir producto al arreglo del carrito
    carrito.push({ nombre, precio });

    // Guardar el carrito en localStorage
    guardarCarrito();

    // Actualizar el carrito en la página
    mostrarCarrito();
    calcularTotal();
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';

    carrito.forEach((producto, index) => {
        carritoDiv.innerHTML += `<p>${producto.nombre} - ${producto.precio}€ <button onclick="eliminarDelCarrito(${index})">Eliminar</button></p>`;
    });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(indice) {
    // Eliminar producto del carrito
    carrito.splice(indice, 1);

    // Guardar el carrito actualizado en localStorage
    guardarCarrito();

    // Actualizar la vista del carrito
    mostrarCarrito();
    calcularTotal();
}

// Función para calcular el total del carrito
function calcularTotal() {
    total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    document.getElementById('total').textContent = total;
}

// Llamar a la función de cargar carrito al inicio
window.onload = function() {
    cargarCarrito();
};
