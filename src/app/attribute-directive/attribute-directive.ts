import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-attribute-directive',
  imports: [NgStyle],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {

  myCountry: string = 'India';
}
