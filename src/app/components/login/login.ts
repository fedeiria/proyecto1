import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { LocalStorage } from '../../services/local-storage';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  protected readonly email: string = '';
  protected readonly password:  string = '';

  constructor(private localStorage: LocalStorage, private router: Router) { }

  getCredentials() {
    const users = this.localStorage.getUserData();
    const user = users.find(u => u.email === this.email && u.password === this.password);
    
    if (user) {
      this.router.navigate(['/welcome']);
    }
    else {
      alert('Error de credenciales');
    }
  }
}