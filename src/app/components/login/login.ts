import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Iusuario } from '../../interfaces/iusuario';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  nuevoUsuario: Iusuario = {
    nombre: '',
    clave: ''
  }
  
  username: string = 'fede';
  password:  string = '1234';

  constructor(private router: Router) {}

  getCredentials() {
    if (this.nuevoUsuario.nombre == this.username && this.nuevoUsuario.clave == this.password) {
      this.router.navigate(['/welcome']);
    }
    else {
      alert('Error de credenciales');
    }
  }
}