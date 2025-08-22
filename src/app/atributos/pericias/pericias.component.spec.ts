/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PericiasComponent } from './pericias.component';

describe('PericiasComponent', () => {
  let component: PericiasComponent;
  let fixture: ComponentFixture<PericiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PericiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PericiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
