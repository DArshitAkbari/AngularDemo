import { Injectable } from '@angular/core';
import {Test} from './test';
import {TESTS} from './mock-test';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

getTests() : Test[]{
  this.messageService.add('hello roy');
  return TESTS;
}

getTest(id:number):Test{

  this.messageService.add(`TestServices : fetch hero id=${id}`);
// console.log(TESTS.find(Test=>Test.id===id));
  return TESTS.find(Test=>Test.id===id);
}

  constructor(private messageService: MessageService) { }
}
