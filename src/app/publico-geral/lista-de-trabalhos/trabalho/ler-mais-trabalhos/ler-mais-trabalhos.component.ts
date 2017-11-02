import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from 'rxjs/Rx';
import {TrabalhoService} from "../../../../service/trabalho.service";

@Component({
  selector: 'app-ler-mais-trabalhos',
  templateUrl: './ler-mais-trabalhos.component.html',
  styleUrls: ['./ler-mais-trabalhos.component.scss']
})
export class LerMaisTrabalhosComponent implements OnInit {

  subscription: Subscription;
  id:number;
  trabalhoSeleccionado: any;
  constructor(private _routerActived:  ActivatedRoute, private _trabalhoService: TrabalhoService) {
  }

  ngOnInit() {
       this._routerActived.params.subscribe(
          params =>{
              this.id = params['id-trabalho'];
             // console.log(this.id);
              this.getTrabalho(this.id);
            //  console.log(this.trabalhoSeleccionado);

          },
           error2 => {console.log("Error"+error2)},
           () =>{

           }
      );
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }


  getTrabalho(id:number){
      this._trabalhoService.getDetalhesTrabalho(id).subscribe(
          resultado => {
              this.trabalhoSeleccionado = resultado['trabalho'];
          },
          error2 => {console.log("Error"+error2)},
          () =>{

          }
      );
  }

}
