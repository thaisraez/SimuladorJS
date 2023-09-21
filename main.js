
let comprar = prompt("Escribe un producto menstrual: Tampón, Toalla Higuiénica o Copa Menstrual")

while (comprar != "ESC"){
    switch(comprar){
        case "Toalla Higuiénica":
            alert("Tiene un costo de $20")
            break
        case "Tampón":
            alert("Tiene un costo de $20")
            break
        case "Copa Menstrual":
            alert("Tiene un costo de $20")
            break
        default:
            alert("No tenemos este producto")
    }
    comprar = prompt("Escribe un producto menstrual: Tampón, Toalla Higuiénica o Copa Menstrual")
}