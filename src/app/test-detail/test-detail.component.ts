import { Component, OnInit } from '@angular/core';
import { Test }from '../test';
import {TestService} from '../test.service';
import {ActivatedRoute} from '@angular/router';
import {Location } from '@angular/common';
@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  // @Input() item:Test;
item:Test;
  constructor(
    private route:ActivatedRoute,
    private testService:TestService,
    private location:Location
  ) { }

  ngOnInit() {
    this.getTest();
  }
  getTest():void{
 
    const id= this.route.snapshot.paramMap.get('id');
    this.item=this.testService.getTest(parseInt(id));
    // console.log(this.item);
    
  }
  goBack():void{  
    this.location.back();
  }

}
