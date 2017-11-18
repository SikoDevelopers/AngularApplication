import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesDetalhesComponent } from './solicitacoes-detalhes.component';

describe('SolicitacoesDetalhesComponent', () => {
  let component: SolicitacoesDetalhesComponent;
  let fixture: ComponentFixture<SolicitacoesDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacoesDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacoesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
