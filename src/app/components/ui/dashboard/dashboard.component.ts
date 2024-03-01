import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i3-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  stepsOptions = [
    {
      label: 'One',
      state: 'calender',
      iconUrl: 'assets/icons/calender.svg',
      component: `<i3-calender></i3-calender>`
    },
    {
      label: 'Two',
      state: 'information',
      iconUrl: 'assets/icons/information.svg',
      component: `<i3-calender></i3-calender>`
    },
    {
      label: 'Three',
      state: 'payments',
      iconUrl: 'assets/icons/payments.svg',
      component: `<i3-calender></i3-calender>`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
