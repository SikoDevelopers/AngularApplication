import { Component, OnInit, ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {UserService} from "../../../../../service/user.service";
import {DocenteService} from "../../../../../service/docente.service";

@Component({
  selector: 'app-tabela-actuais',
  templateUrl: './tabela-actuais.component.html',
  styleUrls: ['./tabela-actuais.component.scss']
})
export class TabelaActuaisComponent implements OnInit {
  displayedColumns = ['apelido','nome',  'titulo_do_trabalho', 'data','estado','operacoes'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
  estudantes : any;
  user:any;
  docente:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _userService:UserService,
              private _docenteService:DocenteService
  ) {
    //  this.getUser();
      //this.dataSource = new ExampleDataSource(this.estudantes, this.paginator);
  }

  ngOnInit() {

        this.getUser();

     //let e = this.getEsudantes();
    //console.log(this.getEsudantes());
    // alert("tamanho:"+this.getEsudantes().length);
    // this.dataSource = new ExampleDataSource(this.estudantes, this.paginator);

  }

  getUser() {
    let token = localStorage.getItem('token');

    this._userService.logoado(token).subscribe(
        resultado => {
          this.user = resultado
        },
        error2 => {
        },
        () => {
          this.getDocente(this.user.id);
          // return this.user;
        }
    );


  }

  getDocente(id) {
    this._docenteService.getDocentePorId(id).subscribe(
        resultado => {
          this.docente = resultado['docente']
        },
        error2 => {
          console.log("Error ao carregar Docente " + error2)
        },
        () => {
          this.getEstudantes(this.docente.id);
          console.log(this.docente);
        }
    );
  }

  getEstudantes(id:number){
    this._docenteService.getSupervisonandos(id).subscribe(
        resultado => {
          this.estudantes = resultado['estudantes_do_docente'];

        },
        error2 => {
          console.log("Error ao carregar Docente " + error2)
        },
        () => {
           // alert(this.estudantes.apelido);
           // this.setEstudantes(this.estudantes);
          //  alert(this.estudantes.length);
           // this.dataSource = new ExampleDataSource(this.estudantes, this.paginator);
            //console.log(this.estudantes[0][0].nome);
            //this.dataSource = new ExampleDataSource(this.estudantes, this.paginator);

        }
    );
  }
  dados:any[];

  setEstudantes(estudantes:any){
      this.estudantes = estudantes;
      this.ngOnInit();
  }

  getEsudantes(){
      return this.estudantes;
  }

    getEstado(is_aprovado){
        if(is_aprovado){
            return "Aprovado";
        }
        else
            return "Nao Aprovado";
    }

  createData(dados:any){
      dados = [
          {
            'apelido':dados.apelido,
            'nome':dados.nome
          }
      ];
      this.dados = dados;
  }

  getDados(){
      return this.dados;
  }

}
/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}


export interface Estudante {
    apelido: string;
    nome: string;

}
/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 100; i++) { this.addUser(); }
  }

  /** Adds a new user to the database. */
  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewUser() {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: (this.data.length + 1).toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<Estudante> {
  constructor(private _estudantes: any, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Estudante[]> {
    const displayDataChanges = [
      this._estudantes,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._estudantes;

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}