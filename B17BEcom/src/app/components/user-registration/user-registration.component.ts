import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  hide = true;
  show = true;
  userRegister!: FormGroup;
  Name: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient,
    private user: UserService) { }

  ngOnInit() {

    this.userRegister = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      confirmPassword: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    }, {
      validators: this.confirmPassVal
    });

  }

  confirmPassVal(control: AbstractControl) {
    const password: string = control.get('passWord')?.value;
    const confirmPassword: string = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    }
  }

  onSubmit() {
    this.http.post<any>('https://bookcart.azurewebsites.net/api/user', this.userRegister.value)
    .subscribe((res: any) => {
    })
  }

  get firstName() {
    return this.userRegister.get('firstName');
  }

  get lastName() {
    return this.userRegister.get('lastName')
  }

  get userName() {
    return this.userRegister.get('userName');
  }

  get passWord() {
    return this.userRegister.get('passWord');
  }

  get confirmPassword() {
    return this.userRegister.get('confirmPassword');
  }

  userNameAvail() {
    let valueGetter = this.userRegister.value.userName
    this.user.userNameAvail(valueGetter).subscribe((resp: any) => {
      this.Name = resp
    })
  }

}
