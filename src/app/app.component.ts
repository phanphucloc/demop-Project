import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public name = "Lộc"
  onClick(){
    this.name =" Phúc Lộc";
  }
  onClick2(){
    this.name =" Phúc Lộcs";
  }
  test(){
    
  }
}
