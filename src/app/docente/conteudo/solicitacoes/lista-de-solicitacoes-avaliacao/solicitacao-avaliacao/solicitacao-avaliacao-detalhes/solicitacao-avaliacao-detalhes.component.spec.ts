import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoAvaliacaoDetalhesComponent } from './solicitacao-avaliacao-detalhes.component';

describe('SolicitacaoAvaliacaoDetalhesComponent', () => {
  let component: SolicitacaoAvaliacaoDetalhesComponent;
  let fixture: ComponentFixture<SolicitacaoAvaliacaoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaoAvaliacaoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoAvaliacaoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
