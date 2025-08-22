import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caminho } from './caminho';

describe('Caminho', () => {
  let component: Caminho;
  let fixture: ComponentFixture<Caminho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caminho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caminho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
