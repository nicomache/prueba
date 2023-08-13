let productos = [
  { nombre: "television", precio: 150000, marca: "Samsung", cantidad: 20, imagen: `<img src="tele.jpg">` },
  { nombre: "heladera", precio: 250000, marca: "Patrick", cantidad: 10, imagen:`<img src="heladera.jpeg">` },
  { nombre: "mini componente", precio: 100000, marca: "Philco" ,cantidad: 13, imagen:`<img src="minicomponente.jpg">`},
  { nombre: "cocina", precio: 190000, marca: "Escorial",cantidad: 10, imagen:`` },
  { nombre: "television", precio: 200000, marca: "Sony",cantidad: 8, imagen:`` },
  { nombre: "television", precio: 200000, marca: "BGH",cantidad: 18, imagen:`` },
  { nombre: "cafetera", precio: 80000, marca: "LG",cantidad: 10, imagen:`` }
];

let container = document.getElementById("container-productos");

productos.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
  <h2>${item.nombre}</h2>
  <p>$${item.precio}
  <p>${item.marca}</p>
  <p>${item.imagen}</p>
  `
 item.imagen.className = "ajuste-imagen";
 container.appendChild(div)
  
});