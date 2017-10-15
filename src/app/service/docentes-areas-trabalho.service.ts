import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DocentesAreasTrabalhoService {


    constructor(private http: HttpClient) { }


    getDocentesAreasTrabalho(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/docentes_areas_trabalhos');

    }


    saveDocentesAreasTrabalho(docentesAreasTrabalho: DocentesAreasTrabalho): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/docentes_areas_trabalhos', docentesAreasTrabalho , {headers: headers})
    }


    updateDocentesAreasTrabalho(id: number, docentesAreasTrabalho: DocentesAreasTrabalho){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/docentes_areas_trabalhos/'+id, docentesAreasTrabalho, {headers: headers});

    }


    deleteDocentesAreasTrabalho(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/docentes_areas_trabalhos/'+id);
    }

}
