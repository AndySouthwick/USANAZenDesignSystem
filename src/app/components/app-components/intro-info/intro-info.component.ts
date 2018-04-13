import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-intro-info',
  templateUrl: './intro-info.component.html',
  styleUrls: ['./intro-info.component.scss']
})
export class IntroInfoComponent implements OnInit {
  @Input() data: {};
  constructor() { }

  ngOnInit() {
  }

}
