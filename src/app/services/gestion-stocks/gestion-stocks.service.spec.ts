import { TestBed } from '@angular/core/testing';

import { GestionStocksService } from './gestion-stocks.service';

describe('GestionStocksService', () => {
  let service: GestionStocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionStocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
