import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-voice',
  templateUrl: './brand-voice.component.html',
  styleUrls: ['./brand-voice.component.scss']
})
export class BrandVoiceComponent implements OnInit {
data: {}
  constructor() { }

  ngOnInit() {
  this.data = {
    title: 'Brand Voice'
  };
  }

}
