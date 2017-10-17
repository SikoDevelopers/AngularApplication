import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusSupervisionandosComponent } from './meus-supervisionandos.component';

describe('MeusSupervisionandosComponent', () => {
  let component: MeusSupervisionandosComponent;
  let fixture: ComponentFixture<MeusSupervisionandosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusSupervisionandosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusSupervisionandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
