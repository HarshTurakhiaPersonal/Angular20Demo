import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [DatePipe, CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  _name: string = 'Angular Pipes Example';
  _message: string =
    'welcome to angular pipes tutorial. angular pipes is used to transform the data in a template view. pipes are simple functions that accept an input value and return a transformed value. angular provides several built-in pipes to transform data such as date, uppercase, lowercase, currency, decimal, percent etc.';

  _jsonData = {
    name: 'Angular Pipes',
    type: 'Tutorial',
    topic: 'Pipes in Angular',
    description: 'This tutorial explains how to use pipes in angular applications.',
  };

  _date: Date = new Date();
}
