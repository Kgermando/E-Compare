import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsGambelaPage } from './forms-gambela.page';

describe('FormsGambelaPage', () => {
  let component: FormsGambelaPage;
  let fixture: ComponentFixture<FormsGambelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsGambelaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsGambelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
