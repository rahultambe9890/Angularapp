import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assi-inputdecorator',
  templateUrl: './assi-inputdecorator.component.html',
  styleUrls: ['./assi-inputdecorator.component.css']
})
export class AssiInputdecoratorComponent implements OnInit {
@Input () Courses : string[];
//parent component is input decoretor component

  constructor() { }

  ngOnInit() {
  }

}
