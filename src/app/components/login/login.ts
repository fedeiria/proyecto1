import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  correo: string = '';
  clave: string = '';
  email: string = 'fede';
  password:  string = '1234';

  constructor(private router: Router) {}

  getCredentials() {
    if (this.correo == this.email && this.clave == this.password) {
      this.router.navigate(['/welcome']);
    }
    else {
      alert('Error de credenciales');
    }
  }
}