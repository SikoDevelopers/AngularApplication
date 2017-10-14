import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTrabalhoComponent } from './tabela-trabalho.component';

describe('TabelaTrabalhoComponent', () => {
  let component: TabelaTrabalhoComponent;
  let fixture: ComponentFixture<TabelaTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
