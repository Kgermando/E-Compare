import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZandoPage } from './zando.page';

describe('ZandoPage', () => {
  let component: ZandoPage;
  let fixture: ComponentFixture<ZandoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZandoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
