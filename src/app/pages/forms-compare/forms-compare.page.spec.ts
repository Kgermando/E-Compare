import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComparePage } from './forms-compare.page';

describe('FormsComparePage', () => {
  let component: FormsComparePage;
  let fixture: ComponentFixture<FormsComparePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsComparePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComparePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
