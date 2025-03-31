import { TestBed } from '@angular/core/testing';

import { DemandesPiecesService } from './demandes-pieces.service';

describe('DemandesPiecesService', () => {
  let service: DemandesPiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandesPiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
