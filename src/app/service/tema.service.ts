import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UserService} from "./user.service";
import {DocenteService} from "./docente.service";

@Injectable()
export class TemaService {

    docente: any;
    user: any;
    constructor(private http: HttpClient, private _userService: UserService, private _docenteService: DocenteService) { }


    getTema(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/temas?completo=true');

    }

    getTemasDoDocente(id: number): Observable<any>{

       // this.docente = this.getUser();
        return this.http.get('http://127.0.0.1:8000/api/temas_docente/'+id);
    }


    saveTema(tema: Tema): Observable<any>{
       // const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const headers: Headers = new Headers({'Content-Type': 'Application/json', 'X-Request-With': 'XMLHttpRequest'});
        return this.http.post('http://127.0.0.1:8000/api/temas', tema , headers)
    }


    updateTema(id: number, tema: Tema){
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/temas/'+id, tema, {headers: headers});

    }


    deleteTema(id: number){
        const headers = new HttpHeaders({'content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/temas/'+id);
    }

    // getUser(){
    //     let token = localStorage.getItem('token');
    //
    //     this._userService.logoado(token).subscribe(
    //         resultado=>{this.user = resultado},
    //         error2 => {},
    //         ()=>{
    //            this.getDocente(this.user.id);
    //         }
    //     );
    //
    //
    // }


    // getDocente(id){
    //     this._docenteService.getDocentePorId(id).subscribe(
    //         resultado => { this.docente = resultado['docente']},
    //         error2 => {console.log("Error ao carregar Docente "+error2)},
    //         () =>{
    //             this.getTemasDoDocente(this.docente.id);
    //             // return this.docente;
    //         }
    //     );
    // }

}
