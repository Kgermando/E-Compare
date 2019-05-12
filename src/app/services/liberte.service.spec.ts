import { TestBed } from '@angular/core/testing';

import { LiberteService } from './liberte.service';

describe('LiberteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiberteService = TestBed.get(LiberteService);
    expect(service).toBeTruthy();
  });
});
