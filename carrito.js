let carrito = JSON.parse(localStorage.getItem("carrito") || [])


carrito.forEach(item => {
    let div = document.createElement("div");

    div.innerHTML +=   `
    <h2>${item.nombre}</h2>
    <p>$${item.precio}</p>
    <p>${item.marca}</p>
    <p class="ajuste-imagen">${item.imagen}</p>
   `
   document.body.appendChild(div)
});

const comprar = () => {
    let total = carrito.reduce((acum, producto) => acum + producto.precio, 0);
    let compraDefinitiva = prompt(`¿Desea comprar por un total de $${total}?`)
    let compradefinitiva = "si" || compraDefinitiva == "Si" ? "Su compra ha sido exitosa" : "";
        alert(compradefinitiva)
}

document.getElementById("compra").addEventListener ("click", ()=>{ 
    comprar()
})
