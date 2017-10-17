import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProcessoSubmissaoService {

    constructor(private http: HttpClient) { }


    getPrcesso_submissao(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/prcesso_submissao');

    }


    savePrcesso_submissao(area: Area): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/prcesso_submissao', area , {headers: headers})
    }


    updatePrcesso_submissao(id: number, area: Area){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/prcesso_submissao/'+id, area, {headers: headers});

    }


    deletePrcesso_submissao(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/prcesso_submissao/'+id);
    }
}
