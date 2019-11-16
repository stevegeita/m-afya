import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionPage } from './resolution.page';

describe('ResolutionPage', () => {
  let component: ResolutionPage;
  let fixture: ComponentFixture<ResolutionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolutionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
