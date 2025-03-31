import { TestBed } from '@angular/core/testing';

import { DetailsDemandePiecesService } from './details-demande-pieces.service';

describe('DetailsDemandePiecesService', () => {
  let service: DetailsDemandePiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsDemandePiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
