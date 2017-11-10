import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeterProtocoloFormComponent } from './submeter-protocolo-form.component';

describe('SubmeterProtocoloFormComponent', () => {
  let component: SubmeterProtocoloFormComponent;
  let fixture: ComponentFixture<SubmeterProtocoloFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmeterProtocoloFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmeterProtocoloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
