import { TestBed } from '@angular/core/testing';

import { FormsGambelaService } from './forms-gambela.service';

describe('FormsGambelaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsGambelaService = TestBed.get(FormsGambelaService);
    expect(service).toBeTruthy();
  });
});
