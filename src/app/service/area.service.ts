import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AreaService {

  constructor(private http: HttpClient) { }


    getArea(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/areas');

    }


    saveArea(area: Area): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/areas', area , {headers: headers})
    }


    updateArea(id: number, area: Area){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/areas/'+id, area, {headers: headers});

    }


    deleteArea(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/areas/'+id);
    }

}
