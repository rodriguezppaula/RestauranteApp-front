import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoDenegadoComponent } from './acceso-denegado.component';

describe('AccesoDenegadoComponent', () => {
  let component: AccesoDenegadoComponent;
  let fixture: ComponentFixture<AccesoDenegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoDenegadoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccesoDenegadoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
