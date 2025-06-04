import { inject } from '@angular/core';
import { TokenService } from '../token/token.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const httpTokenInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const tokenService = inject(TokenService);
  const token = tokenService.token;

  if (token) {
    const authReq = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    });
    return next(authReq);
  }

  return next(request);
};
