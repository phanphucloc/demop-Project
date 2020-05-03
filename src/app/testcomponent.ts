import { Component, Input, OnInit,ChangeDetectionStrategy, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector:"Test",
  template: `
    <h1>Hello {{name}}!</h1>
    <h1>Hello {{user | json}}!</h1>
    <h1>{{count}}</h1>

    <button (click)="add()">add</button>
    {{runChangeDetection()}}
  `,
   changeDetection : ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit , OnChanges{
  @Input("name") name: string;
  user : user;
  public count = 0;
  constructor(
    private http : HttpClient,
    private cdr: ChangeDetectorRef
    ){

  }
  ngOnInit(){
 
    this.user = new user("Phan Phúc","Lộc");
  
    setTimeout(() => {    console.log(this.count); this.cdr.detectChanges(); }, 3000);

    // setInterval(() => this.count = 5, 3000);

    Promise.resolve().then(() => this.count = 5); 
    
   

  }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }
  runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
  add() {
    console.log(this.count);
    this.count++;
  }
}

class user{
   userName : String;
   firstNumbe: string;
   lastName : string;
   Old :Number;
   constructor(firstNumbe,lastName){
     console.log("hihi",);
     this.firstNumbe = firstNumbe;
     this.lastName =lastName;
     this.userName = this.lastName + this.firstNumbe
   }
   
}