import { Component, OnInit } from '@angular/core';
import { CuponService } from '../cupon.service';
import { ICupon } from '../cupon.modelo';

@Component({
  selector: 'app-listado-cupones',
  templateUrl: './listado-cupones.component.html',
  styleUrls: ['./listado-cupones.component.css']
})
export class ListadoCuponesComponent implements OnInit {

  listaCupones: ICupon[] = [];

  constructor(
    private cuponServicio: CuponService
  ) { }

  ngOnInit(): void {
    this.cuponServicio.obtenerCupones().toPromise().then(cupones => this.listaCupones = cupones);
  }

}
