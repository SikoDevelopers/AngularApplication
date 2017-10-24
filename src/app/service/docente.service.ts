import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DocenteService {


    constructor(private http: HttpClient) { }


    getDocente(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/docentes');

    }

    getDocentePorId(id:number): Observable<any>{
        alert(id);
        return this.http.get('http://127.0.0.1:8000/api/docentes_user/'+id);

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

}
