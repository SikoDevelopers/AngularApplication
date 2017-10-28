import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EstudanteService {


    constructor(private http: HttpClient) { }


    getEstudante(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/estudantes');

    }
    getEstudantesByIdUser(id): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/estudantes_byuser/'+id);

    }


    saveEstudante(estudante: Estudante): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/estudantes', estudante , {headers: headers})
    }


    updateEstudante(id: number, estudante: Estudante){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/estudantes/'+id, estudante, {headers: headers});

    }


    deleteEstudante(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/estudantes/'+id);
    }

}
