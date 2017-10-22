import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTrabalhosComponent } from './tabs-trabalhos.component';

describe('TabsTrabalhosComponent', () => {
  let component: TabsTrabalhosComponent;
  let fixture: ComponentFixture<TabsTrabalhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsTrabalhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTrabalhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
