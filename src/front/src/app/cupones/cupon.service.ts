import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICupon } from './cupon.modelo';
import { ICuponService } from './cupon.service.interfaz';

@Injectable({
  providedIn: 'root'
})
export class CuponService implements ICuponService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerCupones(): Observable<ICupon[]> {
    return this.http.get<ICupon[]>('/api/cupones');
  }
}
