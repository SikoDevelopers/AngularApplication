import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CursoService {


    constructor(private http: HttpClient) { }


    getCurso(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/cursos');

    }


    saveCurso(curso: Curso): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/cursos', curso , {headers: headers})
    }


    updateCurso(id: number, curso: Curso){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/cursos/'+id, curso, {headers: headers});

    }


    deleteCurso(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/cursos/'+id);
    }

}
