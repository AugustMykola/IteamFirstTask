import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { TokenGetter } from '../services/tokken-getter'
import { Observable } from 'rx-core';
import { User } from '../shared/Iuser';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: TokenGetter) {}
  intercept(request: HttpRequest<User>, next: HttpHandler): Observable<HttpEvent<User>> {
    
    request = request.clone({
      setHeaders: {
       'X-Token': `${this.auth.getToken()}`
      }
    });
    return next.handle(request);
  }
}