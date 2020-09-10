import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit {


  // tslint:disable-next-line: no-inferrable-types
  alerta: string = "alert-danger";

  // tslint:disable-next-line: no-inferrable-types
  cargando: boolean = false;

  // tslint:disable-next-line: ban-types
  propiedades: any = {
    danger: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  ejecutar(){
    this.cargando = true;
    setTimeout( () => this.cargando = false, 3000 );
  }

}
