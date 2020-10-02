/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RondelicaComponent } from './rondelica.component';

describe('RondelicaComponent', () => {
  let component: RondelicaComponent;
  let fixture: ComponentFixture<RondelicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RondelicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RondelicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
