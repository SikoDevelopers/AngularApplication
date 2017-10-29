import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarParticipantesComponent } from './adicionar-participantes.component';

describe('AdicionarParticipantesComponent', () => {
  let component: AdicionarParticipantesComponent;
  let fixture: ComponentFixture<AdicionarParticipantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarParticipantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
