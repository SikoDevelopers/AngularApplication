import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeterTrabalhoFormComponent } from './submeter-trabalho-form.component';

describe('SubmeterTrabalhoFormComponent', () => {
  let component: SubmeterTrabalhoFormComponent;
  let fixture: ComponentFixture<SubmeterTrabalhoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmeterTrabalhoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmeterTrabalhoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
