import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitForm: FormGroup;
  IMAGES = {
    logo: {
      src: 'assets/images/Logo_Google_2013_Official.svg',
      alt: 'logo google'
    }
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.submitForm = this.formBuilder.group({
      email: ''
    });
  }

}
