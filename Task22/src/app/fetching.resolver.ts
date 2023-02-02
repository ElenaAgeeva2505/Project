import { Injectable } from '@angular/core';
import { Data1Service } from './data1.service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,

} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FetchingResolver implements Resolve<string> {
  constructor (private dataService: Data1Service){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return this.dataService.getHeaders()
  }

}
