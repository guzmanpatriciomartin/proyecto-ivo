//llamo a la funcion con un evento para asegurar que
// el archivo esta cargado
document.addEventListener("DOMContentLoaded", () =>
    fetchData())

// funcion que consume la api
const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        pintarProductos(data)
        detectarBotones(data)
    } catch (error) {
        console.log(error);
    };
};

// Variables utilizadas
const carrito = {}
const contProductos = document.querySelector('#contenedorProductos');
const items = document.querySelector('#items')
const footrCarrito = document.querySelector('#footerCarrito');



// funcion que pinta las cards con los productos desde la api
const pintarProductos = (data) => {
    const template = document.querySelector('#templateProductos').content
    const fragment = document.createDocumentFragment()

    data.forEach(productos => {
        template.querySelector('img').setAttribute('src', productos.imagen)
        template.querySelector('h5').textContent = productos.nombre
        template.querySelector('p span').textContent = productos.precio
        template.querySelector('button').dataset.id = productos.id

        const clon = template.cloneNode(true)
        fragment.appendChild(clon)

    });
    contProductos.appendChild(fragment);
}


// funcion de botones en cards de los productos
const detectarBotones = (data) => {
    const botones = document.querySelectorAll('.card button');

    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            const productos = data.find(item => item.id == btn.dataset.id);
            productos.cantidad = 1
            if (carrito.hasOwnProperty(productos.id)) {
                productos.cantidad = carrito[productos.id].cantidad + 1
            };
            carrito[productos.id] = { ...productos }
            productosEnCarrito()
        });
    });
};

// Funcion que pinta los productos en el carrito
const productosEnCarrito = () => {
    items.innerHTML = ''

    const template = document.querySelector('#templateCarrito').content
    const fragment = document.createDocumentFragment()

    Object.values(carrito).forEach(producto => {
        template.querySelector('th').textContent = producto.id
        template.querySelectorAll('td')[0].textContent = producto.nombre
        template.querySelectorAll('td')[1].textContent = producto.cantidad
        template.querySelector('span').textContent = producto.precio * producto.cantidad

        // botones de agregar o sacar
        template.querySelector('.btn-suma').dataset.id = producto.id
        template.querySelector('.btn-resta').dataset.id = producto.id


        const clon = template.cloneNode(true)
        fragment.appendChild(clon);
    });
    items.appendChild(fragment);
    footerCarrito();
    btnFooterCarrito();

};

// Funcion que pinta el footer del carrito
// y boton para limpiarlo
const footerCarrito = () => {
    footrCarrito.innerHTML = ''

    const template = document.querySelector('#tFooterCarrito').content
    const fragment = document.createDocumentFragment()

    const nCantidad = Object.values(carrito).reduce((ac, { cantidad }) => ac + cantidad, 0);
    const nTotal = Object.values(carrito).reduce((ac, { cantidad, precio }) => ac + cantidad * precio, 0);

    template.querySelectorAll('td')[0].textContent = nCantidad
    template.querySelector('span').textContent = nTotal

    const clon = template.cloneNode(true)
    fragment.appendChild(clon)
    footrCarrito.appendChild(fragment)

    // boton que borra elementos del carrito NO FUNCA ESTA CAGADA
    // const boton = document.querySelector('#vaciarCarrito')
    // boton.addEventListener('click', ()=>{
    //      carrito = {}
    //     productosEnCarrito()
    // })

}
// botones del carrito que agrega o sacar productos
const btnFooterCarrito = () => {
    const botonesAgregar = document.querySelectorAll('#items .btn-suma')
    const botonesQuitar = document.querySelectorAll('#items .btn-resta')

    botonesAgregar.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = carrito[btn.dataset.id]
            producto.cantidad ++
            carrito[btn.dataset.id] = { ...producto }
            productosEnCarrito()
        })
    })

    botonesQuitar.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = carrito[btn.dataset.id]
            producto.cantidad --
            if (producto.cantidad == 0) {
                delete carrito[btn.dataset.id]
            } else {
                carrito[btn.dataset.id] = { ...producto }
            }
            productosEnCarrito()
        })
    })
};