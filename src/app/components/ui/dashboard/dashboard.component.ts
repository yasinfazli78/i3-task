import { Component, OnInit } from '@angular/core';

export interface StepsOptionModel {
  label: string;
  state: string;
  iconUrl: string;
}
@Component({
  selector: 'i3-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
