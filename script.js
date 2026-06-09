async function loadProducts() {
const response = await fetch("product.json"); // response guarda un Objeto
const data = await response.json();            // data guarda el JSON leido
console.log(data.productos[0].nombre);
console.log(data.productos[0].precio);

if (data.productos.lenght>0){
// Hay productos
console.log("Productos cargados con exito!")

} else {
    // No Hay Productos
console.log("Productos cargados con exito!")
}

}

document.addEventListener('DOMContentLoaded', loadProducts);