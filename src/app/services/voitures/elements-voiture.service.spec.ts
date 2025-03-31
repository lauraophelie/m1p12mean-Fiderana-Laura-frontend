import { TestBed } from '@angular/core/testing';

import { ElementsVoitureService } from './elements-voiture.service';

describe('ElementsVoitureService', () => {
  let service: ElementsVoitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementsVoitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
