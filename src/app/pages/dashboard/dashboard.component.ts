import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/interfaces/device';
import { DeviceService } from '../../services/device.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  devices: Device[] = [];
  device!: Device
  constructor(private deviceService: DeviceService, public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.setDevice(result);
    });
  }
  

  ngOnInit(): void {
    this.deviceService.getDevices().subscribe((response: Device[]) => {
      this.devices = response;
    });
  }

  setDevice(device: Device) {
    console.table(device);
    this.deviceService.setDevice(device).subscribe((device)=>{
      this.devices.push(device)
    })
  }
}
