import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';
import { TokenService } from '../token/token.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private get usersAPI() {
    return `${this.settingServ.apiURL}/api/users`;
  }

  constructor(
    private http: HttpClient,
    private settingServ: SettingsService,
    private tokenServ: TokenService,
    private authServ: AuthService
  ) {
    this.authServ.subject.next(!!this.tokenServ.token);
  }

  getUser(id) {
    const url = `${this.usersAPI}/${id}`;
    return this.http.get(url);
  }


  getUsers() {
    return this.http.get(this.usersAPI);
  }


}
