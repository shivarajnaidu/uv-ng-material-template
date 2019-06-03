import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  subject = new BehaviorSubject<boolean>(!!this.isLoggedIn);

  API_URLs = {
    login: `${this.settingServ.apiURL}/api/auth/login`,
    signup: `${this.settingServ.apiURL}/api/auth/signup`,
    forgot: `${this.settingServ.apiURL}/api/auth/forgot`,
    reset: `${this.settingServ.apiURL}/api/auth/reset`
  };

  constructor(
    private http: HttpClient,
    private settingServ: SettingsService,
    private tokenServ: TokenService,
    private router: Router
  ) { }


  get isLoggedIn() {
    return !!this.tokenServ.token;
  }

  login(data) {
    return this.http.post(this.API_URLs.login, data).toPromise();
  }

  signup(data) {
    return this.http.post(this.API_URLs.signup, data).toPromise();
  }

  logout() {
    this.tokenServ.token = '';
    this.subject.next(false);
    this.router.navigate(['/account/login']);
  }

  forgotPassword(data) {
    const url = this.API_URLs.forgot;
    return this.http.post(url, data).toPromise();
  }

  resetPassword(data) {
    const url = this.API_URLs.reset;
    return this.http.post(url, data).toPromise();
  }

}
