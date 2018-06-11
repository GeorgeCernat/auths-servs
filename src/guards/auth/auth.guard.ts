import { UserService } from './../../services/user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user: UserService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.user.getUserStatus() === "loggedIn") {
        console.log("you are on: " + state.url);
        return true;
      }
      else {
        this.router.navigate(['/']);
        console.log('invalid account');
        console.log("you are on: " + state.url);
      }
  }
}
