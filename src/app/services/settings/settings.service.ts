import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  apiURL = environment.apiURL;

  constructor() { }
}
