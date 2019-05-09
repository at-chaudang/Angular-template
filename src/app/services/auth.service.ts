import { Injectable } from '@angular/core';
import { END_POINT } from './api-registry';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = true;

  constructor(
    private apiService: ApiService,
    private jwtHelperService: JwtHelperService
  ) {}

  login(credentials) {
    let url = [END_POINT.authenticate];
    return this.apiService.post(url, credentials).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          return {flag: true, response: response.token};
        }
        return false
      })
    )
  }

  register(credentials) {
    let url = [END_POINT.register];
    return this.apiService.post(url, {
      email: credentials.email,
      password: credentials.password
    }).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          return true;
        }
        return false
      })
    )
  }

  isLoggedIn() {
    return !this.jwtHelperService.isTokenExpired();
  }

  logout() {
    localStorage.removeItem('token');
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return this.jwtHelperService.decodeToken(token);
  }
}
