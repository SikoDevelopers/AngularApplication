import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LerMaisTrabalhosComponent } from './ler-mais-trabalhos.component';

describe('LerMaisTrabalhosComponent', () => {
  let component: LerMaisTrabalhosComponent;
  let fixture: ComponentFixture<LerMaisTrabalhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LerMaisTrabalhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LerMaisTrabalhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
