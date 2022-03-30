import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getEmailErrorMessage() {
    return this.myForm.get('email')?.hasError('required')
      ? 'You must enter a value'
      : this.myForm.get('email')?.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getPasswordErrorMessage() {
    return this.myForm.get('password')?.hasError('required')
      ? 'You must enter a value'
      : this.myForm.get('password')?.hasError('minlength')
      ? 'Min length must be 6'
      : '';
  }

  onSubmit(form: FormGroup) {
    console.log('Email', form.value.email);
    console.log('Password', form.value.password);
    if (this.myForm.valid) {
      this.router.navigate(['/dashboard']);
    } else {
      return;
    }
  }
}
