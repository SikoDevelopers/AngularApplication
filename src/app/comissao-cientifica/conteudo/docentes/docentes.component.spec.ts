import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesComponent } from './docentes.component';

describe('DocentesComponent', () => {
  let component: DocentesComponent;
  let fixture: ComponentFixture<DocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
