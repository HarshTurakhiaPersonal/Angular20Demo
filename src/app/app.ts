import { Component, signal } from '@angular/core';
// import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [],
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

  employees: any[] = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 32 },
    { id: 3, name: 'Bob', age: 45 },
    { id: 4, name: 'Alice', age: 29 },
  ];
}
