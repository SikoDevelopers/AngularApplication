import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SupervisorExternoService {

    constructor(private http: HttpClient) { }


    getSupervisorExterno(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/supervisor_externos');

    }


    saveSupervisorExterno(supervisorExterno: SupervisorExterno): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/supervisor_externos', supervisorExterno , {headers: headers})
    }


    updateSupervisorExterno(id: number, supervisorExterno: SupervisorExterno){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/supervisor_externos/'+id, supervisorExterno, {headers: headers});

    }


    deleteSupervisorExterno(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/supervisor_externos/'+id);
    }

}
