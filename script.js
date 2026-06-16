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
li.innerHTML=` <div class="box">
                    <figure>
                        <img src="${pizza.imagen}" alt="${pizza.nombre}"/>
                        <figcaption>
                            <h3>${pizza.nombre}</h3>
                            <p>$ ${pizza.precio.toLocaleString('es-AR')}</p>
                            <time>${pizza.fecha}</time>
                        </figcaption>
                    </figure>
                    <button class="button" value="${pizza.id}" data-price="${pizza.precio}">
                        Añadir al carrito <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>`;

gallery.appendChild(li);
}); // End of forEach

} // End of try
catch(error){
console.error('Error al cargar productos:', error);                                                                                                                                                                                                                                
}  // End of catch
} // End of Function
document.addEventListener('DOMContentLoaded', cargarProductos);
