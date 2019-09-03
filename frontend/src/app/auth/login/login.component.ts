import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email;
  password;

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
   }

  ngOnInit() {
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      'email': [this.email],
      'password': [this.password],

    })
  }

  login(){
    console.log('Here');
  }

}
