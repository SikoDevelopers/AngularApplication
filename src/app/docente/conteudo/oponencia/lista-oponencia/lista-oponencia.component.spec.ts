import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOponenciaComponent } from './lista-oponencia.component';

describe('ListaOponenciaComponent', () => {
  let component: ListaOponenciaComponent;
  let fixture: ComponentFixture<ListaOponenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOponenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOponenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
