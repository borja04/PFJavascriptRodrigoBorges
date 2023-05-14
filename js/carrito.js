const vaciarCarrito = document.getElementById("btnVaciarCarrito");
const finalizarCompra = document.getElementById("btnFinalizarCompra");
const listaCarrito = document.querySelector('#listaCarrito');
const totalPagar = document.querySelector('#totalPagar');
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
  const carritoLocal = JSON.parse(localStorage.getItem('carrito')) || [];
  if (carritoLocal != null) {
    carrito = carritoLocal;
  }
  console.log(carritoLocal);
  mostrarItemsCarrito();
});

vaciarCarrito.addEventListener('click', () => {
  carrito = [];
  localStorage.setItem('carrito', JSON.stringify(carrito));
  listaCarrito.innerHTML = '';
  mostrarPrecioTotalCarrito();
});

finalizarCompra.addEventListener('click', () => {

  Toastify({
    text: "Compra finalizada con éxito",
    backgroundColor: "green",
    duration: 3000, // Duración en milisegundos
    close: true,
    gravity: "bottom",
    position: "right"
  }).showToast();
});

function quitarCarrito(id) 
{
  carrito = carrito.filter(item => item.id !== id);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  listaCarrito.innerHTML = '';
  mostrarItemsCarrito();
  mostrarPrecioTotalCarrito();
}

function agregarAlCarrito(producto) {

  let row = document.createElement('div');
  row.classList.add('row');

  row.innerHTML += `
                <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-2">
                    <img src="${producto.ruta}" class="card-img m-3" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">$${producto.precio}</p>
                      <button onclick=quitarCarrito(${producto.id}) type="button" class="btn btn-danger">Quitar</button>
                    </div>
                  </div>
                </div>
              </div>
                `;
  listaCarrito.appendChild(row);

  mostrarPrecioTotalCarrito();
}

function mostrarItemsCarrito() {
  carrito.forEach((item) => {
    agregarAlCarrito(item);
  });

}

function mostrarPrecioTotalCarrito() {
  let precio = 0;
  carrito.forEach((item) => {
    precio += item.precio;
  });

  // Obtengo el elemento span dentro del h2
  const span = totalPagar.childNodes[0];
  span.textContent="Total a pagar $" + precio;

}


