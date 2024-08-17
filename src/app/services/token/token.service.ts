import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  #tokenKey = 'AUTH_TOKEN';

  saveToken(data: string) {
    window.localStorage.setItem(this.#tokenKey, data);
  }

  getToken() {
    return window.localStorage.getItem(this.#tokenKey);
  }

  isTokenExist() {
    return this.getToken() ? true : false;
  }

  removeToken() {
    window.localStorage.removeItem(this.#tokenKey);
  }
}
