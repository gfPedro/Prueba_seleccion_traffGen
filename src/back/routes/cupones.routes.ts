import { Router, Request, Response } from 'express';
import { ICupon } from '../cupon/cupon.interfaz';
import { IGenerador } from '../generador/generador.interfaz';

export class CuponesRoutes {

  static generarEndpoints(generadorCupones: IGenerador<ICupon>): Router {
    const router = Router();
    router.get('/cupones', (req: Request, res: Response) => {
      res.send(generadorCupones.generar());
    });
    return router;
  }
}
