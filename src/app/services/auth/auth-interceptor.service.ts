import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private tokenServ: TokenService,
    private auth: AuthService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.tokenServ.getToken();

    if (token) {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      req = req.clone({ headers });
    }

    return next.handle(req)
      .pipe(
        catchError(error => {
          // console.warn(error);

          // Checking if it is an Authentication Error (401)
          if (error.status === 401) {
            this.auth.logout();
          }

          // Checking if user cannot access this resource
          if (error.status === 403) {
            console.warn('You can not access this resource');
          }

          // If it is not an authentication error, just throw it
          return throwError(error);
        })
      );

  }
}
