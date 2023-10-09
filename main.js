const productos = [
  { nombre: "toalla diaria", precio: 5 },
  { nombre: "tampón", precio: 10 },
  { nombre: "toalla higuiénica", precio: 15 },
  { nombre: "copa menstrual", precio: 20 },
];

let carrito = []

let seleccion = prompt("Bienvenido! ¿Desea comprar algo?")

while(seleccion != "si" && seleccion != "no" ){
  alert("Solo puede responder si o no")
  seleccion = prompt("Bienvenido! ¿Desea comprar algo?")
}

if(seleccion == "si"){
  alert("Estos son los productos que tenemos:")
  let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
  alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
  alert("Ok, gracias por venir")
}

while(seleccion != "no"){
  let producto = prompt("Agrega un producto a tu carrito")
  let precio = 0

  if(producto == "toalla diaria" || producto == "tampón" || producto == "toalla higuiénica" || producto == "copa menstrual"){
    switch(producto) {
      case "toalla diaria":
        precio = 5
        break;
      case "tampón":
        precio = 10
        break;
      case "toalla higuiénica":
        precio = 15
        break;
      case "copa menstrual":
        precio = 20
        break;
      default:
        break;
    }
  let unidades = parseInt(prompt("¿Cuántas unidades quieres?"))

  carrito.push({producto, unidades, precio})
  console.log(carrito)
  } else{
    alert("No tenemos ese producto, recuerda que debe ser uno de la lista")
  }

  seleccion = prompt("¿Desea seguir comprando?")

  while(seleccion === "no"){
    alert("Gracias por la compra, no olvide pagar")
    carrito.map((carritoFinal) => {
      console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
  break;
  }
}