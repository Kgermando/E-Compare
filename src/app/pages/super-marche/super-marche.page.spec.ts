import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMarchePage } from './super-marche.page';

describe('SuperMarchePage', () => {
  let component: SuperMarchePage;
  let fixture: ComponentFixture<SuperMarchePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperMarchePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperMarchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
