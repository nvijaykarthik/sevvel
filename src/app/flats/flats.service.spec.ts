import { TestBed, inject } from '@angular/core/testing';

import { FlatsService } from './flats.service';

describe('FlatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlatsService]
    });
  });

  it('should be created', inject([FlatsService], (service: FlatsService) => {
    expect(service).toBeTruthy();
  }));
});
