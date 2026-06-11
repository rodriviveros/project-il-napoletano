async function cargarProductos() {
// Cargar el archivo JSON
try{
const response = await fetch('product.json');
const data = await response.json();
console.log(data);
const gallery=document.querySelector('.gallery');
gallery.innerHTML='';
data.productos.forEach(pizza=>{
const li=document.createElement('li');
li.innerHTML=`${pizza.nombre}`;

gallery.appendChild(li);
}); // End of forEach

} // End of try
catch(error){
console.error('Error al cargar productos:', error);                                                                                                                                                                                                                                
}  // End of catch
} // End of Function
document.addEventListener('DOMContentLoaded', cargarProductos);
