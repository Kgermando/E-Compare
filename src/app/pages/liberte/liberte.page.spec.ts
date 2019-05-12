import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibertePage } from './liberte.page';

describe('LibertePage', () => {
  let component: LibertePage;
  let fixture: ComponentFixture<LibertePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibertePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibertePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
