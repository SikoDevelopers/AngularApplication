import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OponenciaComponent } from './oponencia.component';

describe('OponenciaComponent', () => {
  let component: OponenciaComponent;
  let fixture: ComponentFixture<OponenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OponenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OponenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
