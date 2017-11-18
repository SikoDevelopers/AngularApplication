import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeSolicitacoesComponent } from './lista-de-solicitacoes.component';

describe('ListaDeSolicitacoesComponent', () => {
  let component: ListaDeSolicitacoesComponent;
  let fixture: ComponentFixture<ListaDeSolicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeSolicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
