import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }


    hasPermissions(url) {
        if (url === '/') return true;
        let counter = 0;
        const menu = JSON.parse(localStorage.getItem('currentUser')).menu;
        menu.forEach(function (item) {
            counter += (item.Route === url && item.CAN_ACCESS === true) ? 1 : 0;
        });
        return (counter > 0) ? true : false;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}