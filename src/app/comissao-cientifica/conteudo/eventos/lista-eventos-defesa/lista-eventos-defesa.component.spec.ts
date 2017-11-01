import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventosDefesaComponent } from './lista-eventos-defesa.component';

describe('ListaEventosDefesaComponent', () => {
  let component: ListaEventosDefesaComponent;
  let fixture: ComponentFixture<ListaEventosDefesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEventosDefesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEventosDefesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
