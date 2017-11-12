import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CoSupervisorService {

  constructor(private http: HttpClient) { }




    getCoSupervisor(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/director_curso');

    }


    saveCoSupervisor(CoSupervisor:CoSupervisor): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/director_curso', CoSupervisor , {headers: headers})
    }


    updateCoSupervisor(id: number, coSupervisor: CoSupervisor){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/director_curso/'+id, coSupervisor, {headers: headers});

    }


    deleteCoSupervisor(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/director_curso/'+id);
    }

}
