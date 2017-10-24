import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudanteComponent } from './estudante.component';

describe('EstudanteComponent', () => {
  let component: EstudanteComponent;
  let fixture: ComponentFixture<EstudanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
