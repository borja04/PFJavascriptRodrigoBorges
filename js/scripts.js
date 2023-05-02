let carrito = [];

const productos = [new producto(1, "Capuccino", 40, 1), new producto(2, "Italiano", 18, 1), new producto(3, "Americano", 25, 1), new producto(4, "Moka", 40, 1)];

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const listaCarrito = document.getElementById("listaCarrito");
const vaciarCarrito = document.getElementById("botonVaciarCarrito");

document.addEventListener('DOMContentLoaded', () => {
    const carritoLocal = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carritoLocal != null) {
        carrito = carritoLocal;
    }
    mostrarItemsCarrito();
});

boton1.addEventListener('click', () => {
    const producto = productos.find((item) => {
        return item.id === +boton1.dataset.id
    });
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    agregarAlCarrito(producto);
});

boton2.addEventListener('click', () => {
    const producto = productos.find((item) => {
        return item.id === +boton2.dataset.id
    });
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    agregarAlCarrito(producto);
});

boton3.addEventListener('click', () => {
    const producto = productos.find((item) => {
        return item.id === +boton3.dataset.id
    });
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    agregarAlCarrito(producto);
});

boton4.addEventListener('click', () => {
    const producto = productos.find((item) => {
        return item.id === +boton4.dataset.id
    });
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    agregarAlCarrito(producto);
});

vaciarCarrito.addEventListener('click', () => {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    document.getElementById('listaCarrito').innerHTML = '';
});

// Función para agregar un elemento al carrito
function agregarAlCarrito(producto) {
    // Crea un nuevo elemento li para el producto
    const li = document.createElement('li');
    li.textContent = producto.nombre + ' - ' + producto.precio + '$';

    // Agrega el elemento li al carrito
    listaCarrito.appendChild(li);
}
function mostrarItemsCarrito() {
    carrito.forEach((item) => {
        console.log(item.nombre + ' - ' + item.precio + ' €');
        agregarAlCarrito(item);
    });

}



