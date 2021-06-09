import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {
    // console.log(route);
    return true;

    // const isLoggedIn = this.auth.isLoggedIn();
    // const isGoingToLoginPage = route.path === 'login';

    // if (!isLoggedIn && isGoingToLoginPage) {
    //   return true;
    // }

    // if (isLoggedIn && !isGoingToLoginPage) {
    //   return true;
    // }

    // if (isLoggedIn && isGoingToLoginPage) {
    //   this.router.navigate(['/']);
    //   return false;
    // }

    // this.router.navigate(['/login']);
    // return false;
  }

}
