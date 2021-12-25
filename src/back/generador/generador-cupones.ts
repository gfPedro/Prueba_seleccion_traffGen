import { Cupon } from "../cupon/cupon.clase";
import { ICupon } from "../cupon/cupon.interfaz";
import { IGenerador } from "./generador.interfaz";
import { IAlgoritmo } from "../algoritmo/algoritmo.interfaz";

export class GeneradorCupones implements IGenerador<ICupon> {

  cantidad: number;
  algoritmo: IAlgoritmo

  constructor(cantidad: number, algoritmo: IAlgoritmo) {
    this.cantidad = Math.round(Math.max(0, cantidad));
    this.algoritmo = algoritmo;
  }

  generar(): ICupon[] {
    const cupones = [];
    for (let i = 0; i < this.cantidad; i++) {
      cupones.push(new Cupon(this.algoritmo.aplicar()));
    }
    return cupones;
  }

}
