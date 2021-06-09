import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  API_BASE_URL = `${environment.API_HOST}${environment.API_BASE}`;
  ASSET_GROUP_LIST = [
    ['PROPERTIES', 'Properties'],
    ['VEHICLES', 'Vehicles'],
    ['MACHINARIES', 'Machinaries'],
    ['EQUIPMENTS', 'Equipments'],
    ['GOLD', 'Gold'],
    ['STOCK_LOTS', 'Stock Lots'],
    ['TAKE_OVERS', 'Takeovers'],
  ].map(([value, displayValue]) => ({ displayValue, value }));

  constructor() { }
}
