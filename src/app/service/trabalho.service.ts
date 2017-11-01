import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class TrabalhoService {


    constructor(private http: HttpClient) { }


    getTrabalho(completo?: boolean, paginacao: number = 5): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/trabalhos?completo='+completo + '&paginacao='+paginacao);
    }


    //
    // saveTrabalho(trabalho: Trabalho): Observable<any>{
    //     const headers = new HttpHeaders({'Content-Type': 'application/json'});
    //     return this.http.post('http://127.0.0.1:8000/api/trabalhos', trabalho , {headers: headers})
    // }
    saveTrabalho(formData: FormData): Observable<any>{

        const headers = new HttpHeaders();
        headers.append('Content-Type', 'Application/x-www-form-urlencoded');
        // const headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});
        // headers.append('Content-Type', 'boundary');
        return this.http.post('http://127.0.0.1:8000/api/trabalhos', formData , {headers: headers});
    }


    updateTrabalho(id: number, trabalho: Trabalho){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/trabalhos/'+id, trabalho, {headers: headers});

    }


    deleteTrabalho(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/trabalhos/'+id);
    }

    getParticipantes($id: number){
        return this.http.get('http://localhost:8000/api/trabalhos/participantes/' + $id);
    }


    hasJob($id: number){
        alert($id);
        return this.http.get('http://localhost:8000/api/estudante_job/'+$id);
    }



    getProtocolo(completo?: boolean, paginacao: number = 5): Observable<any>{
        return this.http.get('http://localhost:8000/api/apenas/protocolos');
    }

    getTrabalhosApenas(): Observable<any>{
        return this.http.get('http://localhost:8000/api/apenas/trabalhos');
    }

    getTrabalhosEstudante(id:number): Observable<any>{
        // return this.http.get('http://localhost:8000/api/trabalho_estudante/'+ id);
        return this.http.get('http://localhost:8000/api/trabalho_estudante/'+id);
    }


    getSupervisores(){
        return this.http.get('http://localhost:8000/supervisores');
    }


    /**
     * Metodo usado para ir buscar um trabalho dado o id
     * @param id - id do trabalho a retornar
     * @returns {Observable<Object>}
     */
    getDetalhesTrabalho(id:number){
        return this.http.get('http://localhost:8000/api/trabalho'+id);
    }
}

