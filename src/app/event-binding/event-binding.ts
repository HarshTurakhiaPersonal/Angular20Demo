import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  name: string = '';
  getName($event: any) {
    this.name = $event.target.value;
  }

  email: string = '';
  getEmail($event: any) {
    this.email = $event.target.value;
  }
}
