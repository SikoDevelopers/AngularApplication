import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DirectorCursoService {


    constructor(private http: HttpClient) { }


    getDirectorCurso(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/director_curso');

    }


    saveDirectorCurso(directorCurso: DirectorCurso): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/director_curso', directorCurso , {headers: headers})
    }


    updateDirectorCurso(id: number, directorCurso: DirectorCurso){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/director_curso/'+id, directorCurso, {headers: headers});

    }


    deleteDirectorCurso(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/director_curso/'+id);
    }

}
