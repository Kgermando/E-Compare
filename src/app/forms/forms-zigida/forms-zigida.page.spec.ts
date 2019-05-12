import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsZigidaPage } from './forms-zigida.page';

describe('FormsZigidaPage', () => {
  let component: FormsZigidaPage;
  let fixture: ComponentFixture<FormsZigidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsZigidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsZigidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
