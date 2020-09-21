import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss']
})
export class Assignment2Component implements OnInit {
  statusDisplay: boolean = false;
  // contentLogs = ["xin chào Angular","Tôi muốn kết bạn với bạn","Bạn có thể giúp tôi thiết kế front-end tốt hơn không?","I Love you","so much"];
  contentLogs = [];
  i:number = 0;
  constructor() { }

  ngOnInit() {
  }
  showParagraph(){
    this.statusDisplay = !this.statusDisplay;
    this.contentLogs.push(new Date);
  }
}
