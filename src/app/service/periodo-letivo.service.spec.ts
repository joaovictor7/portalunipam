import { TestBed } from '@angular/core/testing';

import { PeriodoLetivoService } from './periodo-letivo.service';

describe('PeriodoLetivoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeriodoLetivoService = TestBed.get(PeriodoLetivoService);
    expect(service).toBeTruthy();
  });
});
