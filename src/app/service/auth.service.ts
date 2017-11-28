



import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class AuthService {


    constructor(public jwtHelper: JwtHelperService) {}


    /**
     * Verifica se o token esta ou nao expirado e
     * retorna false caso esteja
     * @returns {boolean}
     */
    public isAuthenticated(): boolean {
        if(localStorage.getItem('token')) {
            let token = localStorage.getItem('token');
            return !this.jwtHelper.isTokenExpired(token);
        }
    }
}