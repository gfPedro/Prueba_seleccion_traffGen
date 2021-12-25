import { NgModule } from '@angular/core';
import { ListadoCuponesComponent } from './listado-cupones/listado-cupones.component';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { ElementoCuponComponent } from './elemento-cupon/elemento-cupon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ListadoCuponesComponent,
    ElementoCuponComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ListadoCuponesComponent,
    ElementoCuponComponent
  ]
})
export class CuponesModule { }
