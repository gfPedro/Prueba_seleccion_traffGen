import express, { Application } from 'express';
import log from './logger';
import ConstantesAplicacion from './app.constantes';
import { IGenerador } from './generador/generador.interfaz';
import { ICupon } from './cupon/cupon.interfaz';
import { GeneradorCupones } from './generador/generador-cupones';
import { AlgoritmoFactory } from './algoritmo/algoritmo.factory';
import { CuponesRoutes } from './routes/cupones.routes';

class Aplicacion {

  private app: Application = express();
  private generadorCupones: IGenerador<ICupon>;
  private configuracion: any;

  constructor() {
    this.cargarConfiguracion();
    this.generadorCupones = new GeneradorCupones(
      this.configuracion.cantidad,
      AlgoritmoFactory.algoritmo(this.configuracion.algoritmo)
    );
  }

  arrancar() {
    this.app.set(ConstantesAplicacion.PUERTO, process.env.PUERTO || 3000);

    this.app.use('/api', CuponesRoutes.generarEndpoints(this.generadorCupones));

    this.app.use(express.static(__dirname.replace('back', 'front')));

    this.app.listen(
      this.app.get(ConstantesAplicacion.PUERTO),
      () => log.info(`Servidor corriendo en puerto: ${this.app.get(ConstantesAplicacion.PUERTO)}`)
    );
  }

  private cargarConfiguracion() {
    this.configuracion = require('../../configuracion.json');
  }

}

const app = new Aplicacion();
app.arrancar();
