import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  inputs: ['Pdata'],
})

export class Child {
  Pdata: any;
}
