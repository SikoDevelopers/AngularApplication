import { Component, OnInit, ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tabela-actuais',
  templateUrl: './tabela-actuais.component.html',
  styleUrls: ['./tabela-actuais.component.scss']
})
export class TabelaActuaisComponent implements OnInit {
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

}
