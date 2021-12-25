import { AlgoritmoCaracteres } from "./algoritmo-caracteres";
import { AlgoritmoSecuencial } from "./algoritmo-secuencial";
import { IAlgoritmo } from "./algoritmo.interfaz";

export type ConstructorAlgoritmo = new (...args: {}[]) => IAlgoritmo;
export const algoritmosRegistrados: { [key: string]: ConstructorAlgoritmo } = {
  caracteresAleatorios: AlgoritmoCaracteres,
  numerosSecuenciales: AlgoritmoSecuencial
};
