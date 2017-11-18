import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FicheirosService {

  constructor() { }



    abrirFicheiro(caminho: String){
        window.open("http://127.0.0.1:8000/api/display/"+caminho,'_blank');
    }

}
