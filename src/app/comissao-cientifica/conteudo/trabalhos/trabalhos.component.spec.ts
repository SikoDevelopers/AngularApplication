import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhosComponent } from './trabalhos.component';

describe('TrabalhosComponent', () => {
  let component: TrabalhosComponent;
  let fixture: ComponentFixture<TrabalhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
