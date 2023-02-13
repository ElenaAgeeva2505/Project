import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpEventType,
  HttpErrorResponse,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(request);
    request = request.clone({ params: new HttpParams().set('id',1)
    });
   return next.handle(request);
  }
}
