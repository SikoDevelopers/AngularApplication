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

    ficheiros: Array<any>
    user;
    estado;
    estudante;
    trabalho;
  constructor(private userService: UserService,
              private trabalhoService: TrabalhoService,
              private ficheiroService: FicheirosTrabalhoService,
              private estudanteService: EstudanteService,

              ) { }

  ngOnInit() {
      this.getUser();

      // alert(this.user.id);
      // alert('estudante'+this.estudante.id);
      // alert('trabalho'+this.trabalho.id);
  }

    getUser(){
        const token = localStorage.getItem('token');


        this.userService.logado(token).subscribe(
            resultado=>{
                this.user = resultado;

            },
            error2 => {
            },
            ()=>{
                console.log('user retrivied');
                this.getEstudante();

            }
        );
    }


    getEstudante(){

                this.estudanteService.getEstudantesByIdUser(this.user.id).subscribe(
                    result=>{
                        this.estudante = result['estudante'];

                    },
                    (error)=>{
                        console.log(error)
                    },
                    ()=>{
                        this.getTrabalhoEstudante();

                    }
                )
            }


            getTrabalhoEstudante(){

                this.trabalhoService.getTrabalhosEstudante(4).subscribe(
                    resul=>{
                        this.trabalho = resul['trabalho'];




                    },
                    (error)=>{
                        console.log(error);
                    },
                    ()=>{
                        this.ficheiros= this.trabalho.ficheiros_trabalhos;
                        console.log('files '+this.ficheiros);

                    }
                )
            }

}
