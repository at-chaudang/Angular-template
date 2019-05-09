import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate() {
    let user = this.auth.currentUser;
    if (user && user.admin) {
      return true;
    }

    this.router.navigate(['/error', 403]);
    return false;
  }
}
