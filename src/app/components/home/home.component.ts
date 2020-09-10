import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-class></app-class>
    <p>
        Hola mundo desde app.component
    </p>

    <p [appResaltado]="'red'">
        Hola Mundo
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
