import { Component, Input } from '@angular/core';
import { ICupon } from '../cupon.modelo';

@Component({
  selector: 'app-elemento-cupon',
  templateUrl: './elemento-cupon.component.html',
  styleUrls: ['./elemento-cupon.component.css']
})
export class ElementoCuponComponent {

  @Input() cupon: ICupon = {
    valor: ''
  };

}
