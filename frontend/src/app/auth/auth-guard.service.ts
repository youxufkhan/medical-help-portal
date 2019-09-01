import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  
  canActivate() {
    if (localStorage.getItem('token')) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['auth/login']);
    return false;
}
}