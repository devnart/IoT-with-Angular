import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService:AuthService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getEmailErrorMessage() {
    return this.myForm.get('email')?.hasError('required') ? 'You must enter a value' : '';
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
      this.authService.login(form.value.email, form.value.password).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      return;
    }
  }
}
