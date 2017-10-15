import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrabalhosComponent } from './card-trabalhos.component';

describe('CardTrabalhosComponent', () => {
  let component: CardTrabalhosComponent;
  let fixture: ComponentFixture<CardTrabalhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTrabalhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTrabalhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
