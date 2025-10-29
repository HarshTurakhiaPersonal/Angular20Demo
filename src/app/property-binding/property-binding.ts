import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  tagValue: string = '<h1>This is Property Binding Component</h1>';
  tagValueError: string = '<h1>This is Property Binding Component</h1>';
  tagValueCorrect: string = '<h1>This is Property Binding Component</h1>';
}
