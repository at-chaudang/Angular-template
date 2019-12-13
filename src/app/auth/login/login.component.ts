import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { AuthService } from '../../core/service/auth/auth.service';
import { Router } from '@angular/router';
// import { IMAGES } from './../config';
const IMAGES = {
  logo: {
    src: 'assets/images/Logo_Google_2013_Official.svg',
    alt: 'Logo_Google_2013_Official'
  }
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  images = IMAGES;

  constructor(
    // private auth: AuthService,
    // private router: Router,
  ) {
    // this.canAction = true;
    // this.auth.logger.subscribe((data: any) => {
    //   this.errorMsgs = data;
    //   this.canAction = true;
    // });
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    // this.canAction = false;
    // const body = {
    //   'userId': f.value.username,
    //   'password': f.value.password
    // };
    // this.auth.postLogin(body);
  }
}
