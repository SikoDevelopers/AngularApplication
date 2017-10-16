import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerEfectComponent } from './shimmer-efect.component';

describe('ShimmerEfectComponent', () => {
  let component: ShimmerEfectComponent;
  let fixture: ComponentFixture<ShimmerEfectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShimmerEfectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShimmerEfectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
