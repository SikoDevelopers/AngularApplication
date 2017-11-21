import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSolicitacoesComponent } from './tab-solicitacoes.component';

describe('TabSolicitacoesComponent', () => {
  let component: TabSolicitacoesComponent;
  let fixture: ComponentFixture<TabSolicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSolicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
