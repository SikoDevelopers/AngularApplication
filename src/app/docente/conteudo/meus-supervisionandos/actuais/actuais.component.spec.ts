import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuaisComponent } from './actuais.component';

describe('ActuaisComponent', () => {
  let component: ActuaisComponent;
  let fixture: ComponentFixture<ActuaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
