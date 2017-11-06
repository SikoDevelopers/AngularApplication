import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {TrabalhoService} from "../../../../service/trabalho.service";


@Injectable()
export class TrabalhoResolver implements Resolve<any> {
    constructor(
        private _trabalhoService: TrabalhoService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this._trabalhoService.getDetalhesTrabalho(route.params.id);
        // getById(route.params.id);
    }
}/**
 * Created by User on 11/2/2017.
 */
