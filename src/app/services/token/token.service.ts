import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  private tokenKey = 'token';

  constructor() { }

  get token() {
    return localStorage.getItem(this.tokenKey);
  }

  set token(token) {
    localStorage.setItem(this.tokenKey, token);
    const tokenExpiry = (Date.now() + 86400000).toString();
    localStorage.setItem('l_expires', tokenExpiry);
  }

  getDecodedToken() {
    const token = this.token;
    const partialToken = token.split('.')[1];
    const decodedData = JSON.parse(window.atob(partialToken));
    return decodedData;
  }


}
