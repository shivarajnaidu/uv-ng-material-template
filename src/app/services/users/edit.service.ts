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

  
}
