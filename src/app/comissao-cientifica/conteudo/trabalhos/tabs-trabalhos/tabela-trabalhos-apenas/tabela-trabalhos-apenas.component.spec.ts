import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTrabalhosApenasComponent } from './tabela-trabalhos-apenas.component';

describe('TabelaTrabalhosApenasComponent', () => {
  let component: TabelaTrabalhosApenasComponent;
  let fixture: ComponentFixture<TabelaTrabalhosApenasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaTrabalhosApenasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaTrabalhosApenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
