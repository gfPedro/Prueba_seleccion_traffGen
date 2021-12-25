import log from "../logger";
import { algoritmosRegistrados } from "./algoritmo.utils";

export class AlgoritmoFactory {

  static algoritmo(nombreAlgoritmo: string) {
    const constructorAlgoritmo = algoritmosRegistrados[nombreAlgoritmo];
    if (constructorAlgoritmo === undefined) {
      log.error('Nombre de algoritmo no registrado');
      throw Error('Nombre de algoritmo no registrado');
    } else {
      log.info(`Instanciando algoritmo ${nombreAlgoritmo}`);
      return new constructorAlgoritmo();
    }
  }
}
