import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private inject: Injector
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.inject.get(UserService);

    let jwtToken = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + authService.getToken()
      }
    });

    return next.handle(jwtToken);
  }

}
