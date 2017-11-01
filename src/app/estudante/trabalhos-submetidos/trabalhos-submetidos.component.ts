import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabalhos-submetidos',
  templateUrl: './trabalhos-submetidos.component.html',
  styleUrls: ['./trabalhos-submetidos.component.scss']
})
export class TrabalhosSubmetidosComponent implements OnInit {

<<<<<<< HEAD
    ficheiros: Array<any>
    user;
    estado;
    estudante;
    trabalho;
    bloquear:boolean =true;
    @Input() modal: any;
  constructor(private userService: UserService,
              private trabalhoService: TrabalhoService,
              private ficheiroService: FicheirosTrabalhoService,
              private estudanteService: EstudanteService,
              private estadoFicheiroService : FicheiroTrabalhoEstadoFicheiroService

              ) { }
=======
  constructor() { }
>>>>>>> parent of 95c600c... Merge branch 'master' into hele-foco-docente

  ngOnInit() {
  }

<<<<<<< HEAD
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
                        this.getEstadoFicheiro(this.trabalho.id);

                    }
                )
            }

            getEstadoFicheiro(id){
                this.estadoFicheiroService.getEstadoFicheiro(id).subscribe(
                    resultado=>{
                        this.estado = resultado.estado;

                    },
                    (error)=>{
                        console.log(error);
                    },
                    ()=>{
                        console.log('state retrieved');

                    }
                )
            }

    verFicheiro(caminho){
                // window.location.href="http://127.0.0.1:8000/api/display/"+caminho;
        window.open("http://127.0.0.1:8000/api/display/"+caminho,'_blank');
    }

    getModal(event){
        this.modal= event;
    }
    onMostrarModal(){
        this.modal.show();
    }

=======
>>>>>>> parent of 95c600c... Merge branch 'master' into hele-foco-docente
}
