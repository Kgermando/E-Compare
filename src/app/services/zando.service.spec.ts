import { TestBed } from '@angular/core/testing';

import { ZandoService } from './zando.service';

describe('ZandoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZandoService = TestBed.get(ZandoService);
    expect(service).toBeTruthy();
  });
});
