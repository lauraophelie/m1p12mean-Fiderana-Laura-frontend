import { TestBed } from '@angular/core/testing';

import { PertePiecesService } from './perte-pieces.service';

describe('PertePiecesService', () => {
  let service: PertePiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PertePiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
