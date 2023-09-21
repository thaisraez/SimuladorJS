let comprar = prompt("Escribe un producto menstrual: Tampón, Toalla Higuiénica o Copa Menstrual")
if (comprar != "ESC"){
    switch(comprar){
        case "Toalla Higuiénica":
            alert("Tiene un costo de $20")
            break
        case "Tampón":
            alert("Tiene un costo de $10")
            break
        case "Copa Menstrual":
            alert("Tiene un costo de $40")
            break
        default:
            alert("No tenemos este producto o está mal escrito (Recuerda usar tildes y mayúsculas)")
    }
}

// while (comprar != "ESC"){
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
