import { TestBed } from '@angular/core/testing';

import { ZigidaService } from './zigida.service';

describe('ZigidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZigidaService = TestBed.get(ZigidaService);
    expect(service).toBeTruthy();
  });
});
