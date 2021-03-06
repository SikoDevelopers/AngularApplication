import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../../service/user.service";
import {TrabalhoService} from "../../../../service/trabalho.service";
import {FicheirosTrabalhoService} from "../../../../service/ficheiros-trabalho.service";
import {EstudanteService} from "../../../../service/estudante.service";
import {FicheiroTrabalhoEstadoFicheiroService} from "../../../../service/ficheiro-trabalho-estado-ficheiro.service";
import {until} from "selenium-webdriver";
import elementIsSelected = until.elementIsSelected;

@Component({
  selector: 'app-submeter-trabalho-final-form',
  templateUrl: './submeter-trabalho-final-form.component.html',
  styleUrls: ['./submeter-trabalho-final-form.component.scss']
})
export class SubmeterTrabalhoFinalFormComponent implements OnInit {
  labelDoFileChooser:string = "Selecione o documento"
  constructor(
      private userService: UserService,
      private trabalhoService: TrabalhoService,
      private ficheiroService: FicheirosTrabalhoService,
      private estudanteService: EstudanteService,
      private estadoFicheiroService : FicheiroTrabalhoEstadoFicheiroService


  ) { }

  file;
  ficheiros: Array<any>;
    user;
    @Input() estado;
    estudante;
    trabalho;
  ngOnInit() {
      this.getUser();

  }


    atribuirValor(evento){

      alert('ficheiro carregado');
    this.file = evento.file;

  }


    submeter(){
        // alert(this.estado);



        let formData= new FormData();

        if(this.estado=='Trabalho por Retiticar'){
            // alert('trabalho por re');
            formData.append('tipoFile','protocolo');
        }else if(this.estado=='Aprovado'){
            formData.append('tipoFile','relatorio');

        }else if(this.estado=='Por Publicar'){
            formData.append('tipoFile','relatoioPDF');

        }

        formData.append('trabalho',this.file, this.file.name);
        formData.append( 'estudante_id',''+this.estudante.id);
        formData.append('data',''+new Date());
        formData.append('timestamp',''+new Date().getTime());



        this.trabalhoService.saveTrabalhoFinal(formData).subscribe(
            resultados=>{
                console.log(resultados);
            },
            error2 => {
                console.log(error2);
            },
            ()=>{

                window.location.href = "estudante/trabalhos-submetidos";
            }
        )

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
                // this.getTrabalhoEstudante(estudante.id);

            }
        )
    }

}
