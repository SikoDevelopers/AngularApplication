import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeSolicitacoesOponenciaComponent } from './lista-de-solicitacoes-oponencia.component';

describe('ListaDeSolicitacoesOponenciaComponent', () => {
  let component: ListaDeSolicitacoesOponenciaComponent;
  let fixture: ComponentFixture<ListaDeSolicitacoesOponenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeSolicitacoesOponenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeSolicitacoesOponenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
