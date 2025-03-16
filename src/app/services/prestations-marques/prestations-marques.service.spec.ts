import { TestBed } from '@angular/core/testing';

import { PrestationsMarquesService } from './prestations-marques.service';

describe('PrestationsMarquesService', () => {
  let service: PrestationsMarquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestationsMarquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
