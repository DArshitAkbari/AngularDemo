import { Component, OnInit } from '@angular/core';
import {Test} from '../test';
import {TestService} from '../test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tests:Test[]=[];
  constructor(private testService:TestService) { }

  getTests():void{
    this.tests=this.testService.getTests();
    console.log(this.tests);
    
  }
  ngOnInit() {
    this.getTests();
  }

}
