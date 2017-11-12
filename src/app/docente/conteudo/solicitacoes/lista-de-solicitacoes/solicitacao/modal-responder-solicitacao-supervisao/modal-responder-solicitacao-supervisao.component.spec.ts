import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResponderSolicitacaoSupervisaoComponent } from './modal-responder-solicitacao-supervisao.component';

describe('ModalResponderSolicitacaoSupervisaoComponent', () => {
  let component: ModalResponderSolicitacaoSupervisaoComponent;
  let fixture: ComponentFixture<ModalResponderSolicitacaoSupervisaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalResponderSolicitacaoSupervisaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResponderSolicitacaoSupervisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
