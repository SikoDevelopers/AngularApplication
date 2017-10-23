import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TemaService {


    constructor(private http: HttpClient) { }


    getTema(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/temas?completo=true');

    }


    saveTema(tema: Tema): Observable<any>{
       // const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const headers: Headers = new Headers({'Content-Type': 'Application/json', 'X-Request-With': 'XMLHttpRequest'});
        return this.http.post('http://127.0.0.1:8000/api/temas', tema , headers)
    }


    updateTema(id: number, tema: Tema){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/temas/'+id, tema, {headers: headers});

    }


    deleteTema(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/temas/'+id);
    }

}
