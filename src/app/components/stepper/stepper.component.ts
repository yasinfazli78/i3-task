import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatStepper} from "@angular/material/stepper";
import {StepsOptionModel} from "../ui/dashboard/dashboard.component";

@Component({
  selector: 'i3-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class StepperComponent implements OnInit, AfterViewInit {
  @ViewChildren('stepperIcons') stepperIcons !: TemplateRef<ElementRef> | any;
  matStepperIcons!: TemplateRef<ElementRef>[];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.matStepperIcons = this.stepperIcons.toArray();
    }, 0);
  }


}
