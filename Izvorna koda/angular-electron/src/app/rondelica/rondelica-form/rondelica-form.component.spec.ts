/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RondelicaFormComponent } from './rondelica-form.component';

describe('RondelicaFormComponent', () => {
  let component: RondelicaFormComponent;
  let fixture: ComponentFixture<RondelicaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RondelicaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RondelicaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
