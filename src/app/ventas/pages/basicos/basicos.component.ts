import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "noel";
  nombreUpper: string = "NOEL";
  nombreCompleto: string = "nOeL TrEJo";

  fecha: Date = new Date();


}
