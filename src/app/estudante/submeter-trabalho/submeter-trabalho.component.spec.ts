import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeterTrabalhoComponent } from './submeter-trabalho.component';

describe('SubmeterTrabalhoComponent', () => {
  let component: SubmeterTrabalhoComponent;
  let fixture: ComponentFixture<SubmeterTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmeterTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmeterTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
