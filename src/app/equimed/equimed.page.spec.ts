import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquimedPage } from './equimed.page';

describe('EquimedPage', () => {
  let component: EquimedPage;
  let fixture: ComponentFixture<EquimedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquimedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquimedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
