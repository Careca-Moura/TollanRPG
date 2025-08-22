import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaTemplate } from './ficha-template';

describe('FichaTemplate', () => {
  let component: FichaTemplate;
  let fixture: ComponentFixture<FichaTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
