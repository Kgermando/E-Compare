import { TestBed } from '@angular/core/testing';

import { FormsZigidaService } from './forms-zigida.service';

describe('FormsZigidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsZigidaService = TestBed.get(FormsZigidaService);
    expect(service).toBeTruthy();
  });
});
