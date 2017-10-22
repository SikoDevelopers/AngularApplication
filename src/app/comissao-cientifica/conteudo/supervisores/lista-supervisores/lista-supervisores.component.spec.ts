import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSupervisoresComponent } from './lista-supervisores.component';

describe('ListaSupervisoresComponent', () => {
  let component: ListaSupervisoresComponent;
  let fixture: ComponentFixture<ListaSupervisoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSupervisoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSupervisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
