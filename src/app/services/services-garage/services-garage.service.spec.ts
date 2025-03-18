import { TestBed } from '@angular/core/testing';

import { ServicesGarageService } from './services-garage.service';

describe('ServicesGarageService', () => {
  let service: ServicesGarageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesGarageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
