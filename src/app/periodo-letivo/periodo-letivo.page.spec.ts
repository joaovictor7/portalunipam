import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoLetivoPage } from './periodo-letivo.page';

describe('PeriodoLetivoPage', () => {
  let component: PeriodoLetivoPage;
  let fixture: ComponentFixture<PeriodoLetivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoLetivoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoLetivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
