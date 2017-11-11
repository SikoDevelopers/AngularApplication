import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTrabalhosCompletosComponent } from './dialog-trabalhos-completos.component';

describe('DialogTrabalhosCompletosComponent', () => {
  let component: DialogTrabalhosCompletosComponent;
  let fixture: ComponentFixture<DialogTrabalhosCompletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTrabalhosCompletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTrabalhosCompletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
