import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEspacioComponent } from './agregar-espacio.component';

describe('AgregarEspacioComponent', () => {
  let component: AgregarEspacioComponent;
  let fixture: ComponentFixture<AgregarEspacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEspacioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
