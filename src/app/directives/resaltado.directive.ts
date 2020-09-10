import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef ) {

    // tslint:disable-next-line: quotemark
    console.log("Directiva llamada");
    // tslint:disable-next-line: quotemark
    // el.nativeElement.style.backgroundColor = "yellow";
  }

  // tslint:disable-next-line: quotemark
  @Input("appResaltado") nuevoColor: string;

  // tslint:disable-next-line: typedef
  @HostListener('mouseenter') mouseEntro(){
    // tslint:disable-next-line: quotemark
    this.resaltar( this.nuevoColor || 'yellow');
    // tslint:disable-next-line: quotemark
   //  this.el.nativeElement.style.backgroundColor = "yellow";
  }

    // tslint:disable-next-line: typedef
    @HostListener('mouseleave') mouseSale(){
      this.resaltar( null );
      // tslint:disable-next-line: quotemark
     // this.el.nativeElement.style.backgroundColor = null;
    }

    // tslint:disable-next-line: typedef
    private resaltar( color:string ){
      this.el.nativeElement.style.backgroundColor = color;
    }

}
