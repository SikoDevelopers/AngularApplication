import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProtocolosComponent } from './dialog-protocolos.component';

describe('DialogProtocolosComponent', () => {
  let component: DialogProtocolosComponent;
  let fixture: ComponentFixture<DialogProtocolosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogProtocolosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProtocolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
