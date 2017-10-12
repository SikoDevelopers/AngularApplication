import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FuncionarioService {


    constructor(private http: HttpClient) { }


    getFuncionario(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/funcionarios');

    }


    saveFuncionario(funcionario: Funcionario): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:8000/api/funcionarios', funcionario , {headers: headers})
    }


    updateFuncionario(id: number, funcionario: Funcionario){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/funcionarios/'+id, funcionario, {headers: headers});

    }


    deleteFuncionario(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/funcionarios/'+id);
    }

}
