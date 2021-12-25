import { IAlgoritmo } from "./algoritmo.interfaz";

export class AlgoritmoSecuencial implements IAlgoritmo {

  private longitud: number = 6;
  private caracterRelleno: string = '0';
  private secuencia: number = 0;

  aplicar(): string {
    return String(++this.secuencia).padStart(this.longitud, this.caracterRelleno);
  }

}
