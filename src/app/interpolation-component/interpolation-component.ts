import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-component',
  imports: [],
  templateUrl: './interpolation-component.html',
  styleUrl: './interpolation-component.css',
})
export class InterpolationCOmponent {
  city: string = 'Ahemdabad';

  changeCity() {
    const newCity = prompt('Enter your city name:');
    if (newCity && newCity.trim() !== '') {
      this.city = newCity.trim();
    }
  }

  nullCompany1: any = { name: 'ABC Corp', location: 'New York' };
  nullCompany2: any = null;
  nullCompany3: any = null;
}
