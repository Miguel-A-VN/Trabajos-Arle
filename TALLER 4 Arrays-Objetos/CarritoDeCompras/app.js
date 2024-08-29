const carrito = [];
const productos = [
  { nombre: 'Producto 1', precio: 100, stock: 10 },
  { nombre: 'Producto 2', precio: 200, stock: 5 }
];

const agregarAlCarrito = (nombre, cantidad) => {
  const producto = productos.find(p => p.nombre === nombre);
  if (producto && producto.stock >= cantidad) {
    carrito.push({ nombre, cantidad, precio: producto.precio });
    producto.stock -= cantidad;
    console.log(`Agregado al carrito: ${nombre}, Cantidad: ${cantidad}`);
  } else {
    console.log("Producto no disponible o cantidad excede el stock.");
  }
};

const calcularTotal = () => {
  let total = 0;
  carrito.forEach(item => {
    total += item.precio * item.cantidad;
  });
  console.log(`Total de la compra: ${total}`);
};

const mostrarCarrito = () => {
  console.log("Carrito de compras:");
  carrito.forEach(item => {
  console.log(`Producto: ${item.nombre}, Cantidad: ${item.cantidad}, Precio subtotal: ${item.precio * item.cantidad}`);
 
