import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesTrabalhoComponent } from './detalhes-trabalho.component';

describe('DetalhesTrabalhoComponent', () => {
  let component: DetalhesTrabalhoComponent;
  let fixture: ComponentFixture<DetalhesTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
