import { Component, OnInit } from '@angular/core';

import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

tests:Test[];
selectedTest : Test;


  constructor(private testService: TestService) {
   }

   getTests() : void{
    this.tests = this.testService.getTests();
   }

onSelect(item : Test) : void{ 
  this.selectedTest = item;
}

  ngOnInit() {
    this.getTests();
  }

}
