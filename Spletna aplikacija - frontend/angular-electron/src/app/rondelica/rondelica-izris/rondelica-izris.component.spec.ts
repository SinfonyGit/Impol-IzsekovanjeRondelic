/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RondelicaIzrisComponent } from './rondelica-izris.component';

describe('RondelicaIzrisComponent', () => {
  let component: RondelicaIzrisComponent;
  let fixture: ComponentFixture<RondelicaIzrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RondelicaIzrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RondelicaIzrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
