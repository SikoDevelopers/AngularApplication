import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSupervisorComponent } from './select-supervisor.component';

describe('SelectSupervisorComponent', () => {
  let component: SelectSupervisorComponent;
  let fixture: ComponentFixture<SelectSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
