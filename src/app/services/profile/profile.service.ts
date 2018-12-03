import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  API_URLs = {
    users: `${this.settingServ.apiURL}/api/users`
  };

  constructor(
    private http: HttpClient,
    private settingServ: SettingsService
  ) { }

  newUser(data) {
    const url = this.API_URLs.users;
    return new Promise((resolve, reject) => {
      this.http.post(url, data)
        .subscribe(resolve, reject);
    });
  }

  getUser() {
    const url = this.API_URLs.users;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(resolve, reject);
    });
  }


}
