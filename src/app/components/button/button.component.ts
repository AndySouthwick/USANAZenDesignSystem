import { Component, OnInit } from '@angular/core';
import { button } from '../../component-data/button-data';
declare var require: any
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  buttonData: {};

  loading: boolean;
  constructor() {
  }

  ngOnInit() {
    this.buttonData = button;
    console.log(this.buttonData[0]);
  }
}
