import { Component, signal } from '@angular/core';
import { StructuralDirective } from "./structural-directive/structural-directive";
import { AttributeDirective } from "./attribute-directive/attribute-directive";
import { InterpolationCOmponent } from "./interpolation-component/interpolation-component";
import { PropertyBinding } from "./property-binding/property-binding";
import { EventBinding } from "./event-binding/event-binding";
import { TwoWayDataBinding } from "./two-way-data-binding/two-way-data-binding";
import { Pipes } from "./pipes/pipes";
import { TemplateForms } from "./template-forms/template-forms";

@Component({
  selector: 'app-root',
  imports: [StructuralDirective, AttributeDirective, InterpolationCOmponent, PropertyBinding, EventBinding, TwoWayDataBinding, Pipes, TemplateForms],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('BankWebApp');
  ChildDataValue: any;

  getChildDataToParent(event: any) {
    console.log(event);
    this.ChildDataValue = event;
  }
  
}
