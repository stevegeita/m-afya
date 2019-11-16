import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApaPage } from './apa.page';

describe('ApaPage', () => {
  let component: ApaPage;
  let fixture: ComponentFixture<ApaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
