import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TipoUserService {


    constructor(private http: HttpClient) { }


    getTipoUser(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/tipo_users');

    }


    saveTipoUser(tipoUser: TipoUser): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/tipo_users', tipoUser , {headers: headers})
    }


    updateTipoUser(id: number, tipoUser: TipoUser){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/tipo_users/'+id, tipoUser, {headers: headers});

    }


    deleteTipoUser(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/tipo_users/'+id);
    }

}
