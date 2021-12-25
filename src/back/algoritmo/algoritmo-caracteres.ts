import { IAlgoritmo } from "./algoritmo.interfaz";

export class AlgoritmoCaracteres implements IAlgoritmo {

  private caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  private longitud: number = 6;

  aplicar(): string {
    let valor = '';
    for (let i = 0; i < this.longitud; i++) {
      valor += this.caracteres.charAt(Math.floor(Math.random() * this.caracteres.length));
    }
    return valor;
  }

}
