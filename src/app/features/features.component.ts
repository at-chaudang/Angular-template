import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  menuLink = [
    {
      name: 'Home',
      url: '/profile'
    },
    {
      name: 'Login',
      url: '/login'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
