import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeterTrabalhoFinalFormComponent } from './submeter-trabalho-final-form.component';

describe('SubmeterTrabalhoFinalFormComponent', () => {
  let component: SubmeterTrabalhoFinalFormComponent;
  let fixture: ComponentFixture<SubmeterTrabalhoFinalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmeterTrabalhoFinalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmeterTrabalhoFinalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
