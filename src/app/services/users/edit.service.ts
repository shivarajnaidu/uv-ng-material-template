import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(
    private http: HttpClient,
    private settings: SettingsService
  ) { }

  getUserbyID(val) {
    return this.http.get(`${this.settings.API_BASE_URL}/users/${val}`).toPromise();
  }

  updateUserByID(data, val) {
    return this.http.put(`${this.settings.API_BASE_URL}/users/${val}`, data).toPromise();
  }

  updatePassword(data, userId) {
    return this.http.put(`${this.settings.API_BASE_URL}/users/${userId}`, data).toPromise();
  }

  linkAssests(userId, loanAccountNumber) {
    return this.http.post(`${this.settings.API_BASE_URL}/users/myassets`, { userId, loanAccountNumber }).toPromise();
  }

  getUsers({ offset = 0, limit = 10, role = [] }, isInterestedInJoiningInvestorsGroup?) {
    const params: any = { offset, limit, role };
    if (isInterestedInJoiningInvestorsGroup) {
      Object.assign(params, { isInterestedInJoiningInvestorsGroup });
    }
    const url = `${this.settings.API_BASE_URL}/users`;
    return this.http.get(url, { params }).toPromise();
  }
}
