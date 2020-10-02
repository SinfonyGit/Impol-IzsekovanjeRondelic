/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RondelicaListComponent } from './rondelica-list.component';

describe('RondelicaListComponent', () => {
  let component: RondelicaListComponent;
  let fixture: ComponentFixture<RondelicaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RondelicaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RondelicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
