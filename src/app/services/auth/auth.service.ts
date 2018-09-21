import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URLs = {
    login: `${this.settingServ.apiURL}/api/auth/login`,
    signup: `${this.settingServ.apiURL}/api/auth/signup`,
    forgot: `${this.settingServ.apiURL}/api/auth/forgot`,
    reset: `${this.settingServ.apiURL}/api/auth/reset`
  };

  constructor(
    private http: HttpClient,
    private settingServ: SettingsService
  ) { }

  login(data) {
    const url = this.API_URLs.login;
    return this.http.post(url, data);
  }

  signup(data) {
    const url = this.API_URLs.signup;
    return this.http.post(url, data);
  }

  forgotPassword(data) {
    const url = this.API_URLs.forgot;
    return this.http.post(url, data);
  }

  resetPassword(data) {
    const url = this.API_URLs.reset;
    return this.http.post(url, data);
  }
}
