import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDocentesComponent } from './detalhes-docentes.component';

describe('DetalhesDocentesComponent', () => {
  let component: DetalhesDocentesComponent;
  let fixture: ComponentFixture<DetalhesDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
