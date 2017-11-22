import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoAvaliacaoComponent } from './solicitacao-avaliacao.component';

describe('SolicitacaoAvaliacaoComponent', () => {
  let component: SolicitacaoAvaliacaoComponent;
  let fixture: ComponentFixture<SolicitacaoAvaliacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaoAvaliacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
