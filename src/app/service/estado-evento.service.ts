import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EstadoEventoService {


    constructor(private http: HttpClient) { }


    getEstadoEvento(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/estado_eventos');

    }


    saveEstadoEvento(estadoEvento: EstadoEvento): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/estado_eventos', estadoEvento , {headers: headers})
    }


    updateEstadoEvento(id: number, estadoEvento: EstadoEvento){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/estado_eventos/'+id, estadoEvento, {headers: headers});

    }


    deleteEstadoEvento(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/estado_eventos/'+id);
    }

}
