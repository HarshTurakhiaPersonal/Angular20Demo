import { Component, signal } from '@angular/core';
import { StructuralDirective } from "./structural-directive/structural-directive";
import { AttributeDirective } from "./attribute-directive/attribute-directive";
import { InterpolationCOmponent } from "./interpolation-component/interpolation-component";
// import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [StructuralDirective, AttributeDirective, InterpolationCOmponent],
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
