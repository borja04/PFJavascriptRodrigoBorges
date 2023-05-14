let carrito = [];
let productos = [];
const cantItems= document.querySelector('#cart-container');
const listaProductos = document.querySelector('#listaProductos');

cargarListeners();


function cargarListeners() {
    document.addEventListener('DOMContentLoaded', async () => {
        await productosCarrito();
        mostrarProductosIndex();
        const carritoLocal = JSON.parse(localStorage.getItem('carrito')) || [];
        if (carritoLocal != null) {
            carrito = carritoLocal;
        }
        console.log(carrito.length);
        actualizarElementosCarrito();
    });
}

async function productosCarrito() {
    productos = await fetch('./items.json').then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error: ' + response.statusText);
        }
    }).catch((error) => {
        Toastify({
            text: error,
            className: "error",
            style: {
                background: "",
            }
        }).showToast();
    });
}

function agregarItemCarrito(id) {
    console.log(id);
    const producto = productos.find((item) => {
        return item.id === +id
    });
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarElementosCarrito();

}

function actualizarElementosCarrito()
{
    cantItems.innerHTML = ``;
    let nroProducto = document.createElement('div');
    nroProducto.innerHTML = `<a href="./carrito.html">
    <i class="fa-solid fa-cart-shopping fa-2xl" style="color: #303236;"><span style="color:#c91e1e;">${carrito.length}</span></i>
    </a>`;
    cantItems.appendChild(nroProducto);
}


function mostrarProductosIndex() {
    // Crear un nuevo elemento row para la tarjeta
    let row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('justify-content-center')
    row.innerHTML = ``;

    let contador = 1;
    productos.forEach((producto) => {
        if (contador <= 4) {
            row.innerHTML += `
                <div class="card h-100 col-md-3 m-2">
                    <img class="card-img-top" src="${producto.ruta}" alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">${producto.nombre}</h5>
                            $${producto.precio}
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a onclick="agregarItemCarrito(${producto.id})" data-id="${producto.id}" class="btn btn-outline-dark mt-auto"
                                href="#">Agregar Carrito</a></div>
                    </div>
                </div>
            `;
            contador++;


            if (contador == 4) {
                listaProductos.appendChild(row);
                row = document.createElement('div');
                row.classList.add('row');
                row.classList.add('justify-content-center')
                contador = 1;
            }

        }

        listaProductos.appendChild(row);
    });




}


