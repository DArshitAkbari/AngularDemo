import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { TESTS } from '../mock-test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

selectedTest : Test;
onSelect(item : Test) : void{ 
  this.selectedTest = item;
}

tests = TESTS;

  constructor() { }

  ngOnInit() {
  }

  name = 'darshit';

}
