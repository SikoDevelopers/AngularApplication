import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFicheirosComponent } from './card-ficheiros.component';

describe('CardFicheirosComponent', () => {
  let component: CardFicheirosComponent;
  let fixture: ComponentFixture<CardFicheirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFicheirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFicheirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
