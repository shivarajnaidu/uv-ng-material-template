import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  private tokenKey = 'token';

  constructor() { }

  get token() {
    return (localStorage.getItem(this.tokenKey) || '');
  }

  set token(token) {
    localStorage.setItem(this.tokenKey, token);
  }

  getDecodedToken(token = this.token) {
    if (!token) {
      throw TypeError('Token Not Exist');
    }

    const partialToken = token.split('.')[1];
    const decodedData = JSON.parse(window.atob(partialToken));
    return decodedData;
  }


}
