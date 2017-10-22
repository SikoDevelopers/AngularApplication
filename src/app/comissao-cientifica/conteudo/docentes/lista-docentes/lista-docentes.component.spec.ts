import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDocentesComponent } from './lista-docentes.component';

describe('ListaDocentesComponent', () => {
  let component: ListaDocentesComponent;
  let fixture: ComponentFixture<ListaDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
