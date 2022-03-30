import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../interfaces/device';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  getDevices() : Observable<Device[]>{
    return this.http.get<Device[]>('http://localhost:3000/devices');
  }
}
