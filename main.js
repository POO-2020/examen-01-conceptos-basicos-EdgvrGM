import Cantidad from "./cantidad.js";
import Ingrediente from "./ingrediente.js";
import Receta from "./receta.js";

class Main {
  constructor() {
    this.cantidad = new Cantidad(20, "gramos");
    this.ingrediente = new Ingrediente(
      this.cantidad.getDescripcion(),
      "de Sal",
      15
    );
    this.receta = new Receta("Pizza Hawaiana", "Edgar Gonzalez", [new Ingrediente(new Cantidad(100, "gramos"), "de harina", 100), new Ingrediente(new Cantidad(5, "rebanadas"), "de piña", 230)])
  }
  pruebaCantidad() {
    console.log(this.cantidad.getDescripcion());
  }
  pruebaIngrediente() {
    console.log(this.ingrediente.getDescripcion());
  }
  pruebaReceta() {
      console.log(this.receta.getNumeroIngredientes())
      console.log(this.receta.getCosto())
      this.receta.imprimirEnConsola()
  }
}

let app = new Main();
app.pruebaReceta();
