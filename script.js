let preciosCarrito=[];


function abrirModal(pizza) {

    Swal.fire({

        title: pizza.nombre,
        html: ` <img src="${pizza.imagen}"
                         alt="${pizza.nombre}"
                         style="width:100%; border-radius:8px; margin-bottom:12px">
                    <p style="color:#555; font-size:1rem; margin-bottom:12px">
                        ${pizza.descripcion}
                    </p>
                    <p style="color:#135D76; font-size:2rem; font-weight:bold; margin:0">
                        $ ${pizza.precio.toLocaleString('es-AR')}
                    </p>  `,
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#0D7139',
        width: '500px'

    });
}


function calcularPrecio (pizza) {
preciosCarrito.push(pizza.precio);
console.log(`Precios en el carrito: $${preciosCarrito}`);
let total=0;
preciosCarrito.forEach(precio => {
total=total+precio;

});
console.log(total);
}


    async function cargarProductos() {
        // Cargar el archivo JSON
        try {
            const response = await fetch('product.json');
            const data = await response.json();
            console.log(data);
            const gallery = document.querySelector('.gallery');
            gallery.innerHTML = '';
            data.productos.forEach(pizza => {
                const li = document.createElement('li');
                li.innerHTML = ` <div class="box">
                    <figure>
                        <img class="img-clickeable" src="${pizza.imagen}" alt="${pizza.nombre}"/>
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
                const img = li.querySelector('.img-clickeable');
                img.addEventListener('click', () => abrirModal(pizza));
                gallery.appendChild(li);
                const btn = li.querySelector('.button');
                btn.addEventListener('click', () => calcularPrecio(pizza));
            }); // End of forEach

        } // End of try
        catch (error) {
            console.error('Error al cargar productos:', error);
        }  // End of catch
    } // End of Function
    document.addEventListener('DOMContentLoaded', cargarProductos);
