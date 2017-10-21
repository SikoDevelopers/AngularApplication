import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipanteComponent } from './participante.component';

describe('ParticipanteComponent', () => {
  let component: ParticipanteComponent;
  let fixture: ComponentFixture<ParticipanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
