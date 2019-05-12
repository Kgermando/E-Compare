import { TestBed } from '@angular/core/testing';

import { FormsLiberteService } from './forms-liberte.service';

describe('FormsLiberteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsLiberteService = TestBed.get(FormsLiberteService);
    expect(service).toBeTruthy();
  });
});
