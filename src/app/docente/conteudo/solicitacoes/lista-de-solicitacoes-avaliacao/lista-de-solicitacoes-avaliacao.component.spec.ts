import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeSolicitacoesAvaliacaoComponent } from './lista-de-solicitacoes-avaliacao.component';

describe('ListaDeSolicitacoesAvaliacaoComponent', () => {
  let component: ListaDeSolicitacoesAvaliacaoComponent;
  let fixture: ComponentFixture<ListaDeSolicitacoesAvaliacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeSolicitacoesAvaliacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeSolicitacoesAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
