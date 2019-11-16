import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhifPage } from './nhif.page';

describe('NhifPage', () => {
  let component: NhifPage;
  let fixture: ComponentFixture<NhifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhifPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
