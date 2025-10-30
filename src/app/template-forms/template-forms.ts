import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  email: string;
  password: string;
  gender: string;
  country: string;
  terms: boolean;
  skills: string[];
}

@Component({
  selector: 'app-template-forms',
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './template-forms.html',
  styleUrl: './template-forms.css',
})
export class TemplateForms {
  user: User = {
    name: '',
    email: '',
    password: '',
    gender: '',
    country: '',
    terms: false,
    skills: [],
  };

  countries = ['USA', 'Canada', 'UK', 'India', 'Australia'];
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      console.log('Form Submitted:', this.user);
      alert('✅ Form submitted successfully!');
      form.resetForm(); // resets form + model
    } else {
      alert('⚠️ Please fix validation errors before submitting.');
    }
  }

  onReset(form: any) {
    form.resetForm();
    this.submitted = false;
  }

  toggleSkill(skill: string, event: any) {
    if (event.target.checked) {
      this.user.skills.push(skill);
    } else {
      this.user.skills = this.user.skills.filter((s) => s !== skill);
    }
  }
}
