import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'i3-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class StepperComponent implements OnInit, AfterViewInit {

  @ViewChild('stepper') stepper!: MatStepper;

  @ViewChildren('stepperIcons')stepperIcons !: any

  matStepperIcons!: any[];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.matStepperIcons = this.stepperIcons.toArray();
  }

}
