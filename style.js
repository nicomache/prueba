let productos = [
    { nombre: "television", id: 1, precio: 150000, marca: "Samsung", cantidad: 20, imagen: `<img src="tele.jpg" class="ajuste-imagen">` },
    { nombre: "heladera", id: 2,precio: 250000, marca: "Patrick", cantidad: 10, imagen:`<img src="heladera.jpeg" class="ajuste-imagen">` },
    { nombre: "mini componente", id: 3,precio: 100000, marca: "Philco" ,cantidad: 13, imagen:`<img src="minicomponente.jpg" class="ajuste-imagen">`},
    { nombre: "cocina", id: 4,precio: 190000, marca: "Escorial",cantidad: 10, imagen:`<img src="cocina.jpg" class="ajuste-imagen">` },
    { nombre: "television", id: 5,precio: 200000, marca: "Sony",cantidad: 8, imagen:`<img src="tele2.jpeg" class="ajuste-imagen">` },
    { nombre: "television", id: 6,precio: 200000, marca: "BGH",cantidad: 18, imagen:`<img src="tele3.jpg" class="ajuste-imagen">` },
    { nombre: "cafetera", id: 7,precio: 80000, marca: "Peabody",cantidad: 10, imagen:`<img src="cafetera-peabody.jpg" class="ajuste-imagen">` },
    { nombre: "cafetera", id: 8,precio: 1050000, marca: "Cuk",cantidad: 5, imagen:`<img src="cuk.jpg" class="ajuste-imagen">` }
    ];

    const carrito = []
    let container = document.getElementById("container-productos");
    
    productos.forEach((item) => {
    
    let div = document.createElement("div");

    div.innerHTML += `
    <h2>${item.nombre}</h2>
    <p>$${item.precio}</p>
    <p>${item.marca}</p>
    <p>${item.imagen}</p>
    <button id="${item.id}-buy">Comprar</button>
    <button id="${item.id}-add">Agregar al carrito</button>
    `

    container.appendChild(div)
    
    document.getElementById(`${item.id}-add`).addEventListener("click", ()=>{
        agregarAlCarrito(item)
    })

    document.getElementById(`${item.id}-buy`).addEventListener("click", ()=>{
        console.log(item)
        comprar(item);
    })
});

      
    function agregarAlCarrito(item) {
    
        console.log(item);

        carrito.push(item)
        console.log(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
   
    const comprar = (item) => {
        let total = carrito.reduce((acum, producto) => acum + producto.precio, 0);
        let compraDefinitiva = prompt(`¿Desea comprar ${item.nombre} a ${item.precio}?`)
        let compraCerrada = compraDefinitiva == "si" ? "Su compra ha sido exitosa" : "";
        alert(compraCerrada)
    }
