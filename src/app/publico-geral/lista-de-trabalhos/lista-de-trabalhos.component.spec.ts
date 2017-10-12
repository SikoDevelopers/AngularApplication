import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeTrabalhosComponent } from './lista-de-trabalhos.component';

describe('ListaDeTrabalhosComponent', () => {
  let component: ListaDeTrabalhosComponent;
  let fixture: ComponentFixture<ListaDeTrabalhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeTrabalhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeTrabalhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
