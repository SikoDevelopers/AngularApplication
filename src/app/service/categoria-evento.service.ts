import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CategoriaEventoService {


    constructor(private http: HttpClient) { }


    getCategoriaEvento(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/categoria_eventos');

    }


    saveCategoriaEvento(categoriaEvento: CategoriaEvento): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/categoria_eventos', categoriaEvento , {headers: headers})
    }


    updateCategoriaEvento(id: number, categoriaEvento: CategoriaEvento){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/categoria_eventos/'+id, categoriaEvento, {headers: headers});

    }


    deleteCategoriaEvento(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/categoria_eventos/'+id);
    }

}
