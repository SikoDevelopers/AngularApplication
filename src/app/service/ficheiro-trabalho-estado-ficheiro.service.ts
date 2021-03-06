import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FicheiroTrabalhoEstadoFicheiroService {


    constructor(private http: HttpClient) { }


    getFicheiroTrabalhoEstadoFicheiro(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/Ficheiro_trabalho_estado_ficheiros');

    }

getEstadoFicheiro(id): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/estado_ficheiros/'+id);

    }


    saveFicheiroTrabalhoEstadoFicheiro(ficheiroTrabalhoEstadoFicheiro: FicheiroTrabalho_EstadoFicheiro): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/Ficheiro_trabalho_estado_ficheiros', ficheiroTrabalhoEstadoFicheiro , {headers: headers})
    }


    updateFicheiroTrabalhoEstadoFicheiro(id: number, ficheiroTrabalhoEstadoFicheiro: FicheiroTrabalho_EstadoFicheiro){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/Ficheiro_trabalho_estado_ficheiros/'+id, ficheiroTrabalhoEstadoFicheiro, {headers: headers});

    }


    deleteFicheiroTrabalhoEstadoFicheiro(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/Ficheiro_trabalho_estado_ficheiros/'+id);
    }

}
