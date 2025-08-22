import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgAztla } from './rpg-aztla';

describe('RpgAztla', () => {
  let component: RpgAztla;
  let fixture: ComponentFixture<RpgAztla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpgAztla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpgAztla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
