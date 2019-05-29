import { TestBed } from '@angular/core/testing';

import { ServiceRestService } from './service-rest.service';

describe('ServiceRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceRestService = TestBed.get(ServiceRestService);
    expect(service).toBeTruthy();
  });
});
