import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, AbstractControl, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errors: any = [];
  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      firstName: [''],
      lastName: [''],
      doB: [''],
    }, { validator: MustMatch('password', 'password2') });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  register(): void {
    this.errors = [];
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value)
        .subscribe(() => {
          this.router.navigate(['/auth/login'], { queryParams: { registered: 'success' } });
        },
          (errorResponse) => {
            this.errors.push(errorResponse.error.error);
          });
    }
  }
}
