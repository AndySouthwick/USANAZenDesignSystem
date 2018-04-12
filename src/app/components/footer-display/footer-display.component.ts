import { Component, OnInit } from '@angular/core';
import {footerData} from '../../component-data/footer-data';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-footer-display',
  templateUrl: './footer-display.component.html',
  styleUrls: ['./footer-display.component.scss']
})
export class FooterDisplayComponent implements OnInit {
  module: string;
footerSnippetData: {};
  constructor(private  route: ActivatedRoute) { }

  ngOnInit() {
    this.footerSnippetData = footerData;


    this.route.params.subscribe(params => {
      const id = params['id'];
      this.module = id;
    });
  }

}
