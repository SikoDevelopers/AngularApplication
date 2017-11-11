import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GrauAcademicoService {


    constructor(private http: HttpClient) { }


    getGrauAcademico(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/grau-academicos');

    }


    saveGrauAcademico(grauAcademico): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/grau-academicos', grauAcademico , {headers: headers})
    }


    updateGrauAcademico(id: number, grauAcademico){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/grau-academicos/'+id, grauAcademico, {headers: headers});

    }


    deleteGrauAcademico(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/grau-academicos/'+id);
    }

}