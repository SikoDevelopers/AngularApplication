import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhosSubmetidosComponent } from './trabalhos-submetidos.component';

describe('TrabalhosSubmetidosComponent', () => {
  let component: TrabalhosSubmetidosComponent;
  let fixture: ComponentFixture<TrabalhosSubmetidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhosSubmetidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhosSubmetidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
