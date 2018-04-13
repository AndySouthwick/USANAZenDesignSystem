import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  page: string;
  data: {};
  introData: {};
  constructor(private route: ActivatedRoute) {}
  moduleSelect = () => {
    this.data = {
      title: 'UI COMPONENTS',
      description: 'Html and CSS we use for our components',
      secondaryNav: [
        {
          link: '/angular-modules/footer',
          linkText: 'Footer'
        },
        {
          link: '/angular-modules/card',
          linkText: 'Card'
        },
        {
          link: '/angular-modules/hero',
          linkText: 'Hero'
        },
        {
          link: '/angular-modules/hero-video',
          linkText: 'Hero Video'
        },
        {
          link: '/angular-modules/buttons',
          linkText: 'Buttons'
        },
        {
          link: '/angular-modules/tabs',
          linkText: 'Tabs'
        },
        {
          link: '/angular-modules/form-elements',
          linkText: 'Form Elements'
        },
        {
          link: '/angular-modules/modals',
          linkText: 'Modals'
        },
      ]
    }
this.introData = {
      title: '<strong>WHY</strong> COMPONENTS?',
      content: ' <p>\n' +
      '        With the release of es6 front end code has become easier to manage. Angular 2-5 has provided a way to compartmentalize our code into\n' +
      '        reusable components. Our UI components library is a collection of components from our digital assets. Some components include micro\n' +
      '        interaction or animations that bring our components to life. </p>\n' +
      '      <p>The component snippets listed here are modified for static content.\n' +
      '        This is because we know that not everyone is going to use Angular for their project. We wanted to make this as universal as possible.\n' +
      '        If you are using Angular 2-5 we have provided is the link to our github repo where you can download the individual components and use\n' +
      '        them to your hearts content.\n' +
      '      </p>'
}

    this.route.params.subscribe(params => {
      this.page = params['id'];
    });
      }

   ngOnInit() {
     this.moduleSelect();
   }
}
