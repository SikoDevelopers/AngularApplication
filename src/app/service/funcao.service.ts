import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FuncaoService {


    constructor(private http: HttpClient) { }


    getFuncao(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/funcoes');

    }


    saveFuncao(funcao: Funcao): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/funcoes', funcao , {headers: headers})
    }


    updateFuncao(id: number, funcao: Funcao){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/funcoes/'+id, funcao, {headers: headers});

    }


    deleteFuncao(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/funcoes/'+id);
    }

}
