import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {
  userData: string = 'userData';

  constructor() { }

  // SETTERS
  setUserData(user: any): void {
    localStorage.setItem(this.userData, JSON.stringify(user));
  }

  // GETTERS
  getUserData(): any {
    return JSON.parse(localStorage.getItem(this.userData) || '{ }');
  }

    // borra el local storage
  clearData(): void {
    localStorage.clear();
  }
}
