import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraficosComponent } from './card-graficos.component';

describe('CardGraficosComponent', () => {
  let component: CardGraficosComponent;
  let fixture: ComponentFixture<CardGraficosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGraficosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
