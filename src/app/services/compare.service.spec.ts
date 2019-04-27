import { TestBed } from '@angular/core/testing';

import { CompareService } from './compare.service';

describe('CompareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompareService = TestBed.get(CompareService);
    expect(service).toBeTruthy();
  });
});
