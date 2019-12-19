import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosimapPage } from './hosimap.page';

describe('HosimapPage', () => {
  let component: HosimapPage;
  let fixture: ComponentFixture<HosimapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosimapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosimapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
