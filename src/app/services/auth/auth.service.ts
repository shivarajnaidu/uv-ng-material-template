import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { SettingsService } from '../settings/settings.service';
import { TokenService } from '../token/token.service';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  #http = inject(HttpClient);
  #settings = inject(SettingsService);
  #router = inject(Router);
  #token = inject(TokenService);

  login(data: any) {
    const url = `${this.#settings.API_BASE_URL}/auth/login`;
    return lastValueFrom(this.#http.post<LoginResponse>(url, data));
  }

  isLoggedIn() {
    return this.#token.isTokenExist();
  }

  logout() {
    this.#token.removeToken();
    this.#router.navigate(['/login']);
  }
}
