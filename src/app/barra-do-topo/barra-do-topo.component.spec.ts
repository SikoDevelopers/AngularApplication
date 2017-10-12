import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDoTopoComponent } from './barra-do-topo.component';

describe('BarraDoTopoComponent', () => {
  let component: BarraDoTopoComponent;
  let fixture: ComponentFixture<BarraDoTopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraDoTopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDoTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
