import { TestBed } from '@angular/core/testing';

import { RetourPiecesService } from './retour-pieces.service';

describe('RetourPiecesService', () => {
  let service: RetourPiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetourPiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
