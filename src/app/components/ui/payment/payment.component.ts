import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'i3-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input() stepIndex!: number;
  @Input() label!: string;

  rowWidth: number =  100;

  constructor() { }

  ngOnInit(): void {

  }

}
