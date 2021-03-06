import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AvaliacaoService {

  constructor(private http: HttpClient) { }


    getAvaliacao(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/avalicoes');

    }

    saveAvaliacao(avaliacao, avaliadorSelecionado, protocolo): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/avalicoes', {avaliacao, avaliadorSelecionado, protocolo} , {headers: headers})
    }

    updateAvaliacao(id: number, avaliacao){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/avalicoes/'+id, avaliacao, {headers: headers});

    }

    deleteAvaliacao(idAvaiacao: number, idFicheiroTrabalho){
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.put('http://127.0.0.1:8000/api/avalicoes/deletar/'+idAvaiacao, idFicheiroTrabalho, {headers: headers});
    }

}
