import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TrabalhoService {


    constructor(private http: HttpClient) { }


    getTrabalho(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/trabalhos?completo=true');

    }


    saveTrabalho(trabalho: Trabalho): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/trabalhos', trabalho , {headers: headers})
    }


    updateTrabalho(id: number, trabalho: Trabalho){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/trabalhos/'+id, trabalho, {headers: headers});

    }


    deleteTrabalho(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/trabalhos/'+id);
    }

}
