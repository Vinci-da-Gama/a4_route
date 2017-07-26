import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { LoginService } from './login.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // console.log('9 -- login-guard.ts -- state.url : ' + state.url);
        if (!this.loginService.userLoggedIn) {
            this.router.navigate(['/'], {
                queryParams: {
                    destination: state.url
                }
            });
            console.log('14 -- login-guard.ts -- this.loginService.userLoggedIn : ' + this.loginService.userLoggedIn);
            return false;
        }
        console.log('17 -- login-guard.ts -- this.loginService.userLoggedIn : ' + this.loginService.userLoggedIn);
        return true;
    }
}
