import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';
import { TokenService } from '../token/token.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  subject = new BehaviorSubject<boolean>(false);

  API_URLs = {
    users: `${this.settingServ.apiURL}/api/users`
  };

  constructor(
    private http: HttpClient,
    private settingServ: SettingsService,
    private tokenServ: TokenService,
    private router: Router
  ) {
    this.subject.next(!!this.tokenServ.token);
  }

  getUser(id) {
    const url = `${this.API_URLs.users}/${id}`;
    return this.http.get(id);
  }

  logout() {
    this.tokenServ.token = '';
    this.subject.next(false);
    this.router.navigate(['/account/login']);
  }
  isLoggedIn() {
    return !!this.tokenServ.token;
  }
}
