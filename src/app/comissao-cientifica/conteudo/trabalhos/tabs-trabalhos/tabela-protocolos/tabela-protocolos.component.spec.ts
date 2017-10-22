import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaProtocolosComponent } from './tabela-protocolos.component';

describe('TabelaProtocolosComponent', () => {
  let component: TabelaProtocolosComponent;
  let fixture: ComponentFixture<TabelaProtocolosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaProtocolosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaProtocolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
