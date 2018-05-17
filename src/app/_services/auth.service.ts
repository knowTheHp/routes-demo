import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  logIn = false;
  loggedIn() {
    const promise = new Promise((resolve, reject) => {
      resolve(this.logIn);
    });
    return promise;
  }

  login() {
    this.logIn = true;
  }

  logout() {
    this.logIn = false;
  }
}
