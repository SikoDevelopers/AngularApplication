import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarDocentesFormComponent } from './adicionar-docentes-form.component';

describe('AdicionarDocentesFormComponent', () => {
  let component: AdicionarDocentesFormComponent;
  let fixture: ComponentFixture<AdicionarDocentesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarDocentesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarDocentesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
