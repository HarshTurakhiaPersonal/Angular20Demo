import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  imports: [],
  templateUrl: './structural-directive.html',
  styleUrl: './structural-directive.css',
})

export class StructuralDirective {
 
  employees: any[] = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 32 },
    { id: 3, name: 'Bob', age: 45 },
    { id: 4, name: 'Alice', age: 29 },
  ];
}
