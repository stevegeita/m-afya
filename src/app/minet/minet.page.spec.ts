import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinetPage } from './minet.page';

describe('MinetPage', () => {
  let component: MinetPage;
  let fixture: ComponentFixture<MinetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
