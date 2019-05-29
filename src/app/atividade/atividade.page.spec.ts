import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadePage } from './atividade.page';

describe('AtividadePage', () => {
  let component: AtividadePage;
  let fixture: ComponentFixture<AtividadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
