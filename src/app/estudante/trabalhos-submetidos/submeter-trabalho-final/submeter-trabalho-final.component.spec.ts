import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeterTrabalhoFinalComponent } from './submeter-trabalho-final.component';

describe('SubmeterTrabalhoFinalComponent', () => {
  let component: SubmeterTrabalhoFinalComponent;
  let fixture: ComponentFixture<SubmeterTrabalhoFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmeterTrabalhoFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmeterTrabalhoFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
