import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {GrauAcademicoService} from "../../service/grau-academico.service";
import {CompleterData, CompleterService} from "ng2-completer";

@Component({
  selector: 'app-co-spervisor-modal',
  templateUrl: './co-spervisor-modal.component.html',
  styleUrls: ['./co-spervisor-modal.component.scss']
})
export class CoSpervisorModalComponent implements OnInit {
    protected dataServiceGrau: CompleterData;
    grauAcademicos: any  = [];
    grauAcademico_id: any;
    @Output() gravarCoSup = new EventEmitter();
    @ViewChild('modal') modal: any;
  constructor( private grauAcademicoService: GrauAcademicoService,
               private completerService: CompleterService) {
      this.getGrauAcademico();
  }

  ngOnInit() {
  }



    getGrauAcademico(){
        this.grauAcademicoService.getGrauAcademico().subscribe(
            resultado => { this.grauAcademicos = resultado['grau-academicos'];},
            error2 => {console.log(error2);},
            () => {
                this.dataServiceGrau = this.completerService.local(this.grauAcademicos, 'designacao', 'designacao');
            }
        );
    }

    selecionarGrau(selecionado) {
        this.grauAcademico_id = selecionado.originalObject;
    }
    salvarCoSup(nome,apelido) {

       this.gravarCoSup.emit({
        nome : nome.value,
        grauAcadmico:this.grauAcademico_id.id,
           apelido:apelido.value

       });
        this.modal.hide();
    }
}

