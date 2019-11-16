import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosidetailsPage } from './hosidetails.page';

describe('HosidetailsPage', () => {
  let component: HosidetailsPage;
  let fixture: ComponentFixture<HosidetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosidetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosidetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
