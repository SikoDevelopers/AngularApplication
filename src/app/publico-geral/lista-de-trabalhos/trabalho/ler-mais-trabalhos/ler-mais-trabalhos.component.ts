import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {TrabalhoService} from "../../../../service/trabalho.service";

@Component({
  selector: 'app-ler-mais-trabalhos',
  templateUrl: './ler-mais-trabalhos.component.html',
  styleUrls: ['./ler-mais-trabalhos.component.scss']
})
export class LerMaisTrabalhosComponent implements OnInit {

  subscription: Subscription;
  id:number;
  trabalho: any;
  constructor(private _routerActived:  ActivatedRoute, private _trabalhoService: TrabalhoService) { }

  ngOnInit() {
      this.subscription = this._routerActived.params.subscribe(
          (params: any) =>{
              this.id = params['id-trabalho'];
              console.log(this.id);
              this.getTrabalho(this.id);

          }
      );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  getTrabalho(id:number){
      this._trabalhoService.getDetalhesTrabalho(id).subscribe(
          resultado => {
              this.trabalho = resultado['trabalho'];
          },
          error2 => {console.log("Error"+error2)},
          () =>{

          }
      );
  }

}
