import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisionadosComponent } from './supervisionados.component';

describe('SupervisionadosComponent', () => {
  let component: SupervisionadosComponent;
  let fixture: ComponentFixture<SupervisionadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisionadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
