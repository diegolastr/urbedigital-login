import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacidadFisicaComponent } from './capacidad-fisica.component';

describe('CapacidadFisicaComponent', () => {
  let component: CapacidadFisicaComponent;
  let fixture: ComponentFixture<CapacidadFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacidadFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacidadFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
