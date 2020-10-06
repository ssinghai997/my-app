import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  names:string[]=['Hemamala','Lohita','LaxshmiSai','Lahari']

  constructor() { }

  ngOnInit(): void {
  }

}
