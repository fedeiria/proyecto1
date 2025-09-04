import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bienvenido',
  imports: [FormsModule],
  templateUrl: './bienvenido.html',
  styleUrl: './bienvenido.scss'
})
export class Bienvenido {

  edadUno: number = 0;
  edadDos: number = 0;
  sumaEdades: number = 0;
  promedioEdades: number = 0;

  suma(): number {
    return this.sumaEdades = this.edadUno + this.edadDos;
  }

  promedio(): number {
    return this.promedioEdades = this.suma() / 2;
  }

  calcula() {
    this.suma();
    this.promedio();
  }

  limpiaInputs() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.sumaEdades = 0;
    this.promedioEdades = 0;
  }
}
