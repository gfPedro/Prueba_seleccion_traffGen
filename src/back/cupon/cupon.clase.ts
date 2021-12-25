import { ICupon } from "./cupon.interfaz";

export class Cupon implements ICupon {

  valor: string;

  constructor(valor: string) {
    this.valor = valor;
  }

}
