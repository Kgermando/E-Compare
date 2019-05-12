import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartEcommercePage } from './cart-ecommerce.page';

describe('CartEcommercePage', () => {
  let component: CartEcommercePage;
  let fixture: ComponentFixture<CartEcommercePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartEcommercePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartEcommercePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
