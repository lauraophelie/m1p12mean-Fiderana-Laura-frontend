import { TestBed } from '@angular/core/testing';

import { ReponsePertePiecesService } from './reponse-perte-pieces.service';

describe('ReponsePertePiecesService', () => {
  let service: ReponsePertePiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReponsePertePiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
