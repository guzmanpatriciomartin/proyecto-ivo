//llamo a la funcion con un evento para asegurar que
// el archivo esta cargado
document.addEventListener("DOMContentLoaded", () =>
 fetchData())

// funcion que consume la api
const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error);
    };
};

//evito usar el InnerHTML
const contProductos = document.querySelector('#contenedorProductos');

const pintarProductos = async () =>{
    var data = await fetchData()
    const template = document.querySelector('#templateProductos').content
    const fragment = document.createDocumentFragment()

    data.forEach(productos => {
        template.querySelector('img').setAttribute('src', productos.imagen)
        template.querySelector('h5').textContent = productos.nombre

        const clon = template.cloneNode(true)
        console.log(clon);
        fragment.appendChild(clon)

    });

    contProductos.appendChild(fragment)
}
pintarProductos()