import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JubileePage } from './jubilee.page';

describe('JubileePage', () => {
  let component: JubileePage;
  let fixture: ComponentFixture<JubileePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JubileePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JubileePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
