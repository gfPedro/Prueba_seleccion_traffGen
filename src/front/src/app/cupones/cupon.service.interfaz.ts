import { Observable } from 'rxjs';
import { ICupon } from './cupon.modelo';

export interface ICuponService {

  obtenerCupones(): Observable<ICupon[]>;

}
