import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';
import { LoginDataModel } from '../models/login-data.model';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
    providedIn: 'root'
})
export class LoginService   {
    constructor(private networkService: NetworkService) {}

   userLogin(loginData: LoginDataModel): Observable<any> {
      return this.networkService.postData(loginData)
   }
}