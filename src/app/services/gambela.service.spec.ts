import { TestBed } from '@angular/core/testing';

import { GambelaService } from './gambela.service';

describe('GambelaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GambelaService = TestBed.get(GambelaService);
    expect(service).toBeTruthy();
  });
});
