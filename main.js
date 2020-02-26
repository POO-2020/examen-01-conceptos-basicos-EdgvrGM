import Cantidad from "./cantidad.js";
import Ingrediente from "./ingrediente.js";

class Main {
  constructor() {
    this.cantidad = new Cantidad(20, "gramos");
    this.ingrediente = new Ingrediente(
      this.cantidad.getDescripcion(),
      "de Sal",
      15
    );
  }
  pruebaCantidad() {
    console.log(this.cantidad.getDescripcion());
  }
  pruebaIngrediente() {
    console.log(this.ingrediente.getDescripcion());
  }
}

let app = new Main();
app.pruebaIngrediente();
