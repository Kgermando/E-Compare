import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZigidaPage } from './zigida.page';

describe('ZigidaPage', () => {
  let component: ZigidaPage;
  let fixture: ComponentFixture<ZigidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZigidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZigidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
