import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLibertePage } from './forms-liberte.page';

describe('FormsLibertePage', () => {
  let component: FormsLibertePage;
  let fixture: ComponentFixture<FormsLibertePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsLibertePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLibertePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
