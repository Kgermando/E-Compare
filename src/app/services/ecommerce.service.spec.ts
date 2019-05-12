import { TestBed } from '@angular/core/testing';

import { EcommerceService } from './ecommerce.service';

describe('EcommerceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EcommerceService = TestBed.get(EcommerceService);
    expect(service).toBeTruthy();
  });
});
