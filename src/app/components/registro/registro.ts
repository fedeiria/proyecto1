import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Iuser } from '../../interfaces/iuser';
import { LocalStorage } from '../../services/local-storage';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.scss'
})
export class Registro {

  users: Iuser[] = [];

  newUser: Iuser = {
    name: '',
    surname: '',
    email: '',
    password: ''
  }

  constructor(private localStorage: LocalStorage, private router: Router) { }

  // GETTERS
  get name(): string | null {
    return this.newUser.name;
  }

  get surname(): string | null {
    return this.newUser.surname;
  }

  get email(): string | null {
    return this.newUser.email;
  }

  get password(): string | null {
    return this.newUser.password;
  }

  nuevoRegistro() {
    if (this.name && this.surname && this.email && this.password) {
      this.users = this.localStorage.getUserData();
      this.users.push(this.newUser);
      this.localStorage.setUserData(this.users);
      this.router.navigate(['/welcome']);
    }
    else {
      alert('Debe completar todos los campos');
    }
  }
}
