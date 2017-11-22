import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DocenteService {


    constructor(private http: HttpClient) { }


    getDocente(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/docentes');

    }

    /**
     * Metodo usado para ir buscar o docente usando o id do utilizador
     * @param id - id do utilizador
     * @returns {Observable<Object>} - daddos do docente retornados
     */
    getDocentePorId(id:number): Observable<any>{

        return this.http.get('http://127.0.0.1:8000/api/docentes_user/'+id);

    }

    /**
     * Metodos usado para buscar estudantes supervisionados por um determinado estudante
     * @param id - id do docente
     * @returns {Observable<Object>} - dados do estudante retornados
     */
    getSupervisonandos(id:number): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/docentes/'+id+'/estudantes');
    }


    /**
     * Metodos usado para buscar estudantes supervisionados por um determinado estudante
     * @param id - id do docente
     * @returns {Observable<Object>} - dados do estudante retornados
     */
    getOponencias(id:number): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/docentes/'+id+'/oponencias');
    }

    saveDocente(docente: Docente): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/docentes', docente , {headers: headers})
    }


    updateDocente(id: number, docente: Docente){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/docentes/'+id, docente, {headers: headers});

    }


    deleteDocente(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/docentes/'+id);
    }


    getDocentesEspecificacoes(completo: boolean, paginacao: number): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/docentes?completo='+completo + '&paginacao='+paginacao);
        // return this.http.get('http://127.0.0.1:8000/api/docentes?completo=true&paginacao=3');
    }

    /**
     * Metodo usado para ir buscar solicitacoes de supervisao
     * @param id
     * @returns {Observable<Object>}
     */
    getSolicitacoesDeSupervisao(id: number): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/docentes/'+id+'/solicitacoes/supervisao');
    }

    /**
     * Metodo usado para ir buscar solicitacoes de supervisao
     * @param id
     * @returns {Observable<Object>}
     */
    getSolicitacoesDeAvaliacao(id: number): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/docentes/'+id+'/solicitacoes/avaliacao');
    }
}
