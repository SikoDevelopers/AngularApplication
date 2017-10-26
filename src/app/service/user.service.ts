import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }



    signUp(user): Observable<any>{
        const headers: Headers = new Headers({'Content-Type': 'Application/json', 'X-Request-With': 'XMLHttpRequest'});
        return this.http.post('http://127.0.0.1:8000/api/estudantes/signup', user, headers);
    }


    login(user: User): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/users/login', user , {headers: headers})
    }


    logoado(token:string): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/user?token='+token);
    }


    //Rotas que valida um determinado email
    validarEmail(email: String){
        return this.http.get('http://127.0.0.1:8000/api/users/email/validar', email);
    }

    signUpDocente(userDocente): Observable<any>{
       const headers = new Headers({'Content-Type': 'Application/json', 'X-Request-With': 'XMLHttpRequest'});
       return this.http.post('http://127.0.0.1:8000/api/docentes/signup', userDocente, headers);
    }





}
