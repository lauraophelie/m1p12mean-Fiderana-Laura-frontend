import { TestBed } from '@angular/core/testing';

import { DetailsRendezVousService } from './details-rendez-vous.service';

describe('DetailsRendezVousService', () => {
  let service: DetailsRendezVousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsRendezVousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
