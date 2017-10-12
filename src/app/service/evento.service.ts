import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EventoService {

    constructor(private http: HttpClient) { }


    getEvento(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/eventos');

    }


    saveEvento(evento: Evento): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/eventos', evento , {headers: headers})
    }


    updateEvento(id: number, evento: Evento){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/eventos/'+id, evento, {headers: headers});

    }


    deleteEvento(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/eventos/'+id);
    }

}