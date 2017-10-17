import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DocenteAreaService {


    constructor(private http: HttpClient) { }


    getDocenteArea(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/docentes');

    }

    searchDocenteArea(docentes_id,areas_id): Observable<any>{

        // const headers = new HttpHeaders({'Content-Type': 'application/json'});
        // const formData = new FormData();
        // formData.append('areas_id',area_id);
        // formData.append('areas_id',docente_id);
        return this.http.get('http://127.0.0.1:8000/api/search_docente_area/'+docentes_id,areas_id);

    }



    saveDocenteArea(docenteArea: DocenteArea): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/docente_areas', docenteArea , {headers: headers})
    }


    updateDocenteArea(id: number, docenteArea: DocenteArea){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/docente_areas/'+id, docenteArea, {headers: headers});

    }


    deleteDocenteArea(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/docente_areas/'+id);
    }

}
