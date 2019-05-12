import { TestBed } from '@angular/core/testing';

import { FormsZandoService } from './forms-zando.service';

describe('FormsZandoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsZandoService = TestBed.get(FormsZandoService);
    expect(service).toBeTruthy();
  });
});
