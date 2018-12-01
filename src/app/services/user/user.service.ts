import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';
import { TokenService } from '../token/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URLs = {
    users: `${this.settingServ.apiURL}/api/users`
  };

  constructor(
    private http: HttpClient,
    private settingServ: SettingsService,
    private tokenServ: TokenService,
    private router: Router
  ) { }

  getUser(id) {
    const url = `${this.API_URLs.users}/${id}`;
    return this.http.get(id);
  }

  logout() {
    this.tokenServ.token = '';
    this.router.navigate(['/account/login']);
  }
}
