function obtenerCosto(producto) {
  switch (producto) {
    case "tampon":
      return 10; // Precio del producto 1
    case "toalla higuiénica":
      return 15; // Precio del producto 2
    case "copa menstrual":
      return 20; // Precio del producto 3
    default:
      return null; // Producto no encontrado
  }
}

let comprar;

do {
  comprar = prompt("Ingrese el nombre del producto que desea comprar (o escriba 'salir' para finalizar):");

  if (comprar !== "salir") {
    const precio = obtenerCosto(comprar);

    if (precio !== null) {
      alert(`El precio de ${comprar} es $${precio}`);
    } else {
      alert(`${comprar} no está en la lista de productos.`);
    }
  }
} while (comprar !== "salir");


// let comprar = prompt("Escribe un producto menstrual: Tampón, Toalla Higuiénica o Copa Menstrual")
// if (comprar != "ESC"){
//     switch(comprar){
//         case "Toalla Higuiénica":
//             alert("Tiene un costo de $20")
//             break
//         case "Tampón":
//             alert("Tiene un costo de $10")
//             break
//         case "Copa Menstrual":
//             alert("Tiene un costo de $40")
//             break
//         default:
//             alert("No tenemos este producto o está mal escrito (Recuerda usar tildes y mayúsculas)")
//     }
// }

// while (comprar !== "ESC"){
//     switch(comprar){
//         case "Toalla Higuiénica":
//             alert("Tiene un costo de $20")
//             break
//         case "Tampón":
//             alert("Tiene un costo de $20")
//             break
//         case "Copa Menstrual":
//             alert("Tiene un costo de $20")
//             break
//         default:
//             alert("No tenemos este producto")
//     }
//     comprar = prompt("Escribe un producto menstrual: Tampón, Toalla Higuiénica o Copa Menstrual")
// }
