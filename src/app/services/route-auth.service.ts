import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { sessionKeys } from '../utility/app.constant';
import { StorageService } from './storage.service';
@Injectable({
    providedIn: 'root'
})
export class RouteAuthService implements CanActivate {

    constructor(private storageService: StorageService,
        private router: Router) {}

canActivate(route: ActivatedRouteSnapshot, state: any) {

        if(this.storageService.read(sessionKeys.login)) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }

}
}