import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTrabalhosComponent } from './tab-trabalhos.component';

describe('TabTrabalhosComponent', () => {
  let component: TabTrabalhosComponent;
  let fixture: ComponentFixture<TabTrabalhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTrabalhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTrabalhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
