import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // })

  loginForm= this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    password: ['']
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.loginForm.value)
  }
  updateForm(){
    this.loginForm.patchValue({
      email: "gbagada"
    })
  }

}
