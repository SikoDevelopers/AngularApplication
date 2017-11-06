import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorDoCursoComponent } from './director-do-curso.component';

describe('DirectorDoCursoComponent', () => {
  let component: DirectorDoCursoComponent;
  let fixture: ComponentFixture<DirectorDoCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorDoCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorDoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
