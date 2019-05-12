import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsZandoPage } from './forms-zando.page';

describe('FormsZandoPage', () => {
  let component: FormsZandoPage;
  let fixture: ComponentFixture<FormsZandoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsZandoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsZandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
