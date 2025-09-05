import { Injectable } from '@angular/core';

import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {
  usersData: string = 'users';

  constructor() { }

  // SETTERS
  setUserData(user: Iuser[]): void {
    localStorage.setItem(this.usersData, JSON.stringify(user));
  }

  // GETTERS
  getUserData(): Iuser[] {
    return JSON.parse(localStorage.getItem(this.usersData) || '[ ]');
  }

  // borra el local storage
  clearData(): void {
    localStorage.clear();
  }
}
