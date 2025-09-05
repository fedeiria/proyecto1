import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Iusuario } from '../../interfaces/iusuario';
import { LocalStorage } from '../../services/local-storage';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.scss'
})
export class Registro {

  nuevoUsuario: Iusuario = {
    nombre: '',
    apellido: '',
    email: '',
    clave: ''
  }

  constructor(private localStorage: LocalStorage, private router: Router) { }

  // GETTERS
  get name(): string | null {
    return this.nuevoUsuario.nombre;
  }

  get surname(): string | null {
    return this.nuevoUsuario.apellido;
  }

  get email(): string | null {
    return this.nuevoUsuario.email;
  }

  get password(): string | null {
    return this.nuevoUsuario.clave;
  }

  nuevoRegistro() {
    if (this.name && this.surname && this.email && this.password) {
      this.localStorage.setUserData(this.nuevoUsuario);
      this.router.navigate(['/welcome']);
    }
    else {
      alert('Debe completar todos los campos');
    }
  }
}
