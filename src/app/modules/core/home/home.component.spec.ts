import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create username form control', () => {
    expect(component.loginForm.contains('username')).toBeTruthy();
  });

  it('should create password form control', () => {
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should return valid false when username is empty', () => {
    let formControl = component.loginForm.get('username');

    formControl.setValue('');

    expect(formControl.valid).toBeFalsy();
  });

  it('should return valid true when username is valid', () => {
    let formControl = component.loginForm.get('username');

    formControl.setValue('admin');

    expect(formControl.valid).toBeTruthy();
  });

  it('should navigate to dashboard when authentication is successful', () => {
    component.loginForm.get('username').setValue('admin');
    component.loginForm.get('password').setValue('admin');
    let routerSpy = spyOn(TestBed.get(Router), 'navigate');

    component.login();

    expect(routerSpy).toHaveBeenCalledWith(['dashboard'])
  });

  it('should not navigate to dashboard when authentication fails', () => {
    let routerSpy = spyOn(TestBed.get(Router), 'navigate');

    component.login();

    expect(routerSpy).not.toHaveBeenCalledWith(['dashboard'])
  });

});
