import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GambelaPage } from './gambela.page';

describe('GambelaPage', () => {
  let component: GambelaPage;
  let fixture: ComponentFixture<GambelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GambelaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GambelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
