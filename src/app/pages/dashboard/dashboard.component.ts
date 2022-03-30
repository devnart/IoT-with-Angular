import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/interfaces/device';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  devices: Device[] = []

  constructor(private deviceService: DeviceService) {
    this.deviceService.getDevices().subscribe((response: Device[]) => {
      this.devices = response
    });
  }

  ngOnInit(): void {
  }
  
}
