const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos(){

    //al agregar carrito
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

    //Eliminar
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    //Vaciar
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    //Se muestra el Local
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    //SE carga el pedido en la pagina siguiente
    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}