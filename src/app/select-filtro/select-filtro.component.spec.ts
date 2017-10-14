import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFiltroComponent } from './select-filtro.component';

describe('SelectFiltroComponent', () => {
  let component: SelectFiltroComponent;
  let fixture: ComponentFixture<SelectFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
