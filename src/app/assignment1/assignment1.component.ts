import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.scss']
})
export class Assignment1Component implements OnInit {
  username : String = "";
  // statusReset : Boolean = false;

  constructor() { }

  ngOnInit() {
  }
  // checkUsername(){
  //   if(this.username.length > 0){
  //     this.statusReset = true;
  //   }else{
  //     this.statusReset = false;
  //   }
  // }
  resetUsername(){
    this.username = "";
  }
}
