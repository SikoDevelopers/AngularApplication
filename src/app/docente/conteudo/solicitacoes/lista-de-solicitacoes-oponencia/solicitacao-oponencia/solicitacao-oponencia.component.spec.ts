import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoOponenciaComponent } from './solicitacao-oponencia.component';

describe('SolicitacaoOponenciaComponent', () => {
  let component: SolicitacaoOponenciaComponent;
  let fixture: ComponentFixture<SolicitacaoOponenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaoOponenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoOponenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
