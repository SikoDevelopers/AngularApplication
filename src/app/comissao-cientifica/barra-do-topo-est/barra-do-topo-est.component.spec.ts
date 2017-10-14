import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDoTopoEstComponent } from './barra-do-topo-est.component';

describe('BarraDoTopoEstComponent', () => {
  let component: BarraDoTopoEstComponent;
  let fixture: ComponentFixture<BarraDoTopoEstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraDoTopoEstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDoTopoEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
