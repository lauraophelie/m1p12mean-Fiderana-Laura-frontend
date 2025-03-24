import { TestBed } from '@angular/core/testing';

import { CategoriePiecesService } from './categorie-pieces.service';

describe('CategoriePiecesService', () => {
  let service: CategoriePiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriePiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
