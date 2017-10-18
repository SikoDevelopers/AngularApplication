import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaOponenciasComponent } from './tabela-oponencias.component';

describe('TabelaOponenciasComponent', () => {
  let component: TabelaOponenciasComponent;
  let fixture: ComponentFixture<TabelaOponenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaOponenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaOponenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
