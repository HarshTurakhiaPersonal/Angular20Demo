import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  // inputs: ['Pdata'],
  outputs: ['childEventEmiter']
})
export class Child {
  // Pdata: any;


  childEventEmiter = new EventEmitter();

  sendDataFromChildToParent(value: any) {
    console.log(value);

    this.childEventEmiter.emit(value);
  }
}
