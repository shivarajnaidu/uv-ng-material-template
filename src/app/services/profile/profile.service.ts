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
    console.log(data)
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

  getUserById(id) {
    const url = this.API_URLs.users;
    return new Promise((resolve, reject) => {
      this.http.get(`${url}/${id}`)
        .subscribe(resolve, reject);
    });
  }

  updateUser(data) {
    const url = this.API_URLs.users;
    const id = data.id;
    return new Promise((resolve, reject) => {
      this.http.put(`${url}/${id}`, data)
        .subscribe(resolve, reject);
    });
  }


}
