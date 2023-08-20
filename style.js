let productos = [
  { nombre: "television", id: 1, precio: 150000, marca: "Samsung", cantidad: 20, imagen: `<img src="tele.jpg" class="ajuste-imagen">` },
  { nombre: "heladera", id: 2,precio: 250000, marca: "Patrick", cantidad: 10, imagen:`<img src="heladera.jpeg" class="ajuste-imagen">` },
  { nombre: "mini componente", id: 3,precio: 100000, marca: "Philco" ,cantidad: 13, imagen:`<img src="minicomponente.jpg" class="ajuste-imagen">`},
  { nombre: "cocina", id: 4,precio: 190000, marca: "Escorial",cantidad: 10, imagen:`` },
  { nombre: "television", id: 5,precio: 200000, marca: "Sony",cantidad: 8, imagen:`` },
  { nombre: "television", id: 6,precio: 200000, marca: "BGH",cantidad: 18, imagen:`` },
  { nombre: "cafetera", id: 7,precio: 80000, marca: "LG",cantidad: 10, imagen:`` }
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
  <button id="${item.id}">comprar</button>
  `
  container.appendChild(div)
  
  document.getElementById(`${item.id}`).addEventListener("click", ()=>{
      agregarAlCarrito(item)
  })
  });

  function agregarAlCarrito(item) {
      // la funcion recibe el objeto completo que es el producto por lo que puedo usarlo
      console.log(item);
      // uso push para agregar el objeto al carrito
      carrito.push(item)
      console.log(carrito)
      // hay que hacer que si el producto esta en el carrito en lugar de volver a agregarlo modifique la cantidad

  }