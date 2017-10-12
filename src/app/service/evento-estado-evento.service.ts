import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EventoEstadoEventoService {


    constructor(private http: HttpClient) { }


    getEventoEstadoEvento(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/evento_estado_eventos');

    }


    saveEventoEstadoEvento(eventoEstadoEvento: EventoEstadoEvento): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/evento_estado_eventos', eventoEstadoEvento , {headers: headers})
    }


    updateEventoEstadoEvento(id: number, eventoEstadoEvento: EventoEstadoEvento){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/evento_estado_eventos/'+id, eventoEstadoEvento, {headers: headers});

    }


    deleteEventoEstadoEvento(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/evento_estado_eventos/'+id);
    }

}
