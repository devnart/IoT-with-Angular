import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Device } from 'src/app/interfaces/device';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ViewChild('circle') circle!: ElementRef; 
  @ViewChild('card') card!: ElementRef; 
  @Input() device: Device = {} as Device
  constructor() { }

  ngOnInit(): void {
//
  }
  ngAfterViewInit() {
  }

  toggleSwitch() {
    this.circle.nativeElement.classList.toggle('active')
    this.card.nativeElement.classList.toggle('on')
  }


}
