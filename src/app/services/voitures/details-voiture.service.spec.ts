import { TestBed } from '@angular/core/testing';

import { DetailsVoitureService } from './details-voiture.service';

describe('DetailsVoitureService', () => {
  let service: DetailsVoitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsVoitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
