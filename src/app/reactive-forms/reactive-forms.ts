import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormArray,
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

// Strongly typed form model
interface UserFormModel {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  gender: FormControl<string>;
  country: FormControl<string>;
  skills: FormArray<FormControl<string>>;
  terms: FormControl<boolean>;
}

@Component({
  selector: 'app-reactive-forms',
  imports: [JsonPipe, CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveUserFormComponent {
  userForm: FormGroup<UserFormModel>;
  countries = ['USA', 'Canada', 'UK', 'India', 'Australia'];
  skillsList = ['Angular', 'React', 'Vue'];
  submitted = false;

  constructor(private fb: NonNullableFormBuilder) {
    this.userForm = new FormGroup<UserFormModel>({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/),
      ]),
      gender: this.fb.control('', Validators.required),
      country: this.fb.control('', Validators.required),
      skills: new FormArray<FormControl<string>>([], Validators.required),
      terms: this.fb.control(false, Validators.requiredTrue),
    });
  }

  get f() {
    return this.userForm.controls;
  }

  get skillsArray(): FormArray<FormControl<string>> {
    return this.userForm.controls.skills;
  }

  toggleSkill(skill: string, event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      this.skillsArray.push(this.fb.control(skill));
    } else {
      const index = this.skillsArray.controls.findIndex((x) => x.value === skill);
      this.skillsArray.removeAt(index);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      alert('⚠️ Please fix validation errors before submitting.');
      return;
    }
    console.log('✅ Form Submitted:', this.userForm.getRawValue());
    alert('Form submitted successfully!');
    this.userForm.reset();
    this.submitted = false;
  }

  onReset() {
    this.userForm.reset();
    this.submitted = false;
  }
}
