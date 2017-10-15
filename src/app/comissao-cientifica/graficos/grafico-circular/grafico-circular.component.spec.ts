import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoCircularComponent } from './grafico-circular.component';

describe('GraficoCircularComponent', () => {
  let component: GraficoCircularComponent;
  let fixture: ComponentFixture<GraficoCircularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoCircularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
