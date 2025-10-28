import { Component, signal } from '@angular/core';
import { StructuralDirective } from "./structural-directive/structural-directive";
// import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [StructuralDirective],
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
