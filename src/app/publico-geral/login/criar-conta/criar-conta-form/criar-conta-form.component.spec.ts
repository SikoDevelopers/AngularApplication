import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContaFormComponent } from './criar-conta-form.component';

describe('CriarContaFormComponent', () => {
  let component: CriarContaFormComponent;
  let fixture: ComponentFixture<CriarContaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarContaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarContaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
