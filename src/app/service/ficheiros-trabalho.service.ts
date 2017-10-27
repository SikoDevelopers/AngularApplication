import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FicheirosTrabalhoService {


    constructor(private http: HttpClient) { }


    getFicheirosTrabalho(id): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/ficheiros_trabalhos/'+id);

    }

    getFicheirosTra(id): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/ficheiros_de_trabalho/'+id);

    }

    getFicheirosEstado(caminho): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/ficheiros_estado/'+caminho);

    }


    saveFicheirosTrabalho(ficheirosTrabalho: FicheirosTrabalho): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/ficheiros_trabalhos', ficheirosTrabalho , {headers: headers})
    }


    updateFicheirosTrabalho(id: number, ficheirosTrabalho: FicheirosTrabalho){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/ficheiros_trabalhos/'+id, ficheirosTrabalho, {headers: headers});

    }


    deleteFicheirosTrabalho(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/ficheiros_trabalhos/'+id);
    }

}
