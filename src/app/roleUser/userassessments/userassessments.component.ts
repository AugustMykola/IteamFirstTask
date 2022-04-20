import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userassessments',
  templateUrl: './userassessments.component.html',
  styleUrls: ['./userassessments.component.less']
})
export class UserassessmentsComponent implements OnInit {

  constructor(public http: HttpClient) {}


  ngOnInit(): void {
  }


}
