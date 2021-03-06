import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EstadoFicheiroService {


    constructor(private http: HttpClient) { }


    getEstadoFicheiro(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/estado_ficheiros');

    }


    saveEstadoFicheiro(estadoFicheiro: EstadoFicheiro): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/estado_ficheiros', estadoFicheiro , {headers: headers})
    }


    updateEstadoFicheiro(id: number, estadoFicheiro: EstadoFicheiro){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/estado_ficheiros/'+id, estadoFicheiro, {headers: headers});

    }


    deleteEstadoFicheiro(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/estado_ficheiros/'+id);
    }

}
