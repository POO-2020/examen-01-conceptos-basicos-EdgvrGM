import Cantidad from "./cantidad.js";


class Main {
    constructor() {
        this.cantidad = new Cantidad(20, "gramos")
    }
    pruebaCantidad() {
        console.log(this.cantidad.getDescripcion())
    }
}

let app = new Main
app.pruebaCantidad()