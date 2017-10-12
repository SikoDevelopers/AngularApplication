import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CategoriaFicheiroService {


    constructor(private http: HttpClient) { }


    getCategoriaFicheiroService(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/categoria_ficheiros');

    }


    saveCategoriaFicheiroService(categoriaFicheiros: CategoriaFicheiroService): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/categoria_ficheiros', categoriaFicheiros , {headers: headers})
    }


    updateCategoriaFicheiroService(id: number, categoriaFicheiros: CategoriaFicheiroService){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/categoria_ficheiros/'+id, categoriaFicheiros, {headers: headers});

    }


    deleteCategoriaFicheiros(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/CategoriaFicheiroServices/'+id);
    }

}
