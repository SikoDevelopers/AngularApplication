import { Component, OnInit, Input } from '@angular/core';
import {UserService} from "../../service/user.service";
import {TrabalhoService} from "../../service/trabalho.service";
import {FicheirosTrabalhoService} from "../../service/ficheiros-trabalho.service";
import {EstudanteService} from "../../service/estudante.service";
import {FicheiroTrabalhoEstadoFicheiroService} from "../../service/ficheiro-trabalho-estado-ficheiro.service";

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
    bloquear:boolean =true;
    @Input() modal: any;
    @Input() modalAvalicao: any;
    @Input() modalP: any;
    avaliacaoTrabalho;
  constructor(private userService: UserService,
              private trabalhoService: TrabalhoService,
              private ficheiroService: FicheirosTrabalhoService,
              private estudanteService: EstudanteService,
              private estadoFicheiroService : FicheiroTrabalhoEstadoFicheiroService

              ) { }

  ngOnInit() {

      this.getUser();

      // alert(this.user.id);
      // alert('estudante'+this.estudante.id);
      // alert('trabalho'+this.trabalho.id);
  }
    onClickFile(file){


        this.avaliacaoTrabalho = file.avaliacao;
        // alert(this.avaliacaoTrabalho.parecer);
        this.modalAvalicao.show();
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
                let estudante: any = 'hhhh';

                this.estudanteService.getEstudantesByIdUser(this.user.id).subscribe(
                    result=>{
                        estudante = result['estudante'][0];

                        console.log(estudante);
                    },
                    (error)=>{
                        console.log(error)
                    },
                    ()=>{
                        this.estudante = estudante;
                        console.log(estudante);
                        this.getTrabalhoEstudante(estudante.id);

                    }
                )
            }


            getTrabalhoEstudante(id){

                this.trabalhoService.getTrabalhosEstudante(id).subscribe(
                    resul=>{
                        this.trabalho = resul['trabalho'];

                        console.log(this.trabalho);



                    },
                    (error)=>{
                        console.log(error);
                    },
                    ()=>{
                        this.ficheiros= this.trabalho.ficheiros_trabalhos;
                        console.log('files '+this.ficheiros);

                        this.getEstadoFicheiro();

                    }
                )
            }

            getEstadoFicheiro(){
                this.estado = this.ficheiros[this.ficheiros.length-1].estado_ficheiros[this.ficheiros[this.ficheiros.length-1].estado_ficheiros.length-1].designacao;
            alert(this.estado);
            }

    verFicheiro(caminho){
                // window.location.href="http://127.0.0.1:8000/api/display/"+caminho;
        window.open("http://127.0.0.1:8000/api/display/"+caminho,'_blank');
    }


    getModal(event){
        this.modal= event;
    }

    getModalProto(event){
        this.modalP= event;
    }


    getModalAvaliacao(evento){
        this.modalAvalicao = evento;
        console.log(evento);
    }

    onMostrarModal(){
        this.modal.show();
    }
    onMostrarModalP(){
        this.modalP.show();
    }

}
