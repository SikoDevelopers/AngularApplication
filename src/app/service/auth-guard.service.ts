

import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, CanLoad, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad, CanActivateChild {


    constructor(public auth: AuthService, public router: Router) {}

    /**
     * metodo para validar rotas
     * - rotas que precisam ser acessadas por users autenticados
     * @returns {boolean}
     */
    canActivate(): boolean {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;

        }
        return true;
    }

    canLoad(): boolean{
        if(!this.auth.isAuthenticated()){
            this.router.navigate(['login']);
            alert('false');
            return false;
        }
        return true;
    }

    canActivateChild(): boolean{
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;

        }
        return true;
    }
}