import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
    const isFormValid = this.loginForm.valid;
    if (!isFormValid) {
      return;
    }

    const isAuthenticationSuccess = this.loginForm.value['username'] === 'admin' && this.loginForm.value['password'] === 'admin';
    if (isFormValid && isAuthenticationSuccess) {
      this.router.navigate(['dashboard']);
    }
  }
}
