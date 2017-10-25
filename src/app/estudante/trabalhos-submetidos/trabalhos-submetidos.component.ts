import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {TrabalhoService} from "../../service/trabalho.service";
import {FicheirosTrabalhoService} from "../../service/ficheiros-trabalho.service";
import {EstudanteService} from "../../service/estudante.service";

@Component({
  selector: 'app-trabalhos-submetidos',
  templateUrl: './trabalhos-submetidos.component.html',
  styleUrls: ['./trabalhos-submetidos.component.scss']
})
export class TrabalhosSubmetidosComponent implements OnInit {
    ficheiros;
    user;
  constructor(private userService: UserService,
              private trabalhoService: TrabalhoService,
              private ficheiroService: FicheirosTrabalhoService,
              private estudanteService: EstudanteService) { }

  ngOnInit() {
  }


  getFiles(){

  }



    getEstudante(){
        const token = localStorage.getItem('token');


        this.userService.logado(token).subscribe(
            resultado=>{
                this.user = resultado['user'];
                alert(this.user.id);
                this.estudanteService.getEstudantesByIdUser(this.user.id).subscribe(
                    result=>{
                     let estudante = result['estudante'];
                      this.trabalhoService.getTrabalhosEstudante(estudante.id).subscribe(
                          resul=>{
                              let trabalho = resul['trabalho'];
                              this.ficheiroService.getFicheirosTrabalho().subscribe(
                                  res=>{

                                  }
                              )
                          }
                      )

                    }
                )

            },
            error2 => {

            },
            ()=>{
                console.log('user retrivied');
            }
        );
    }
}
