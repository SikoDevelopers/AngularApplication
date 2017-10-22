import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTrabalhosCompletoComponent } from './tabela-trabalhos-completo.component';

describe('TabelaTrabalhosCompletoComponent', () => {
  let component: TabelaTrabalhosCompletoComponent;
  let fixture: ComponentFixture<TabelaTrabalhosCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaTrabalhosCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaTrabalhosCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
