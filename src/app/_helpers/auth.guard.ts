﻿import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authenticationService.userValue;
        if (user) {
            // logged in so return true
            return true;
        } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/home2'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}