import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i3-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  stepsOptions = [
    {
      label: 'تقویم',
      state: 'calender',
      iconUrl: 'assets/icons/calender.svg'
    },
    {
      label: 'جزییات',
      state: 'information',
      iconUrl: 'assets/icons/information.svg'
    },
    {
      label: 'پرداخت',
      state: 'payments',
      iconUrl: 'assets/icons/payments.svg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
