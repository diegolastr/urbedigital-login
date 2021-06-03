import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUrbeComponent } from './login-urbe.component';

describe('LoginUrbeComponent', () => {
  let component: LoginUrbeComponent;
  let fixture: ComponentFixture<LoginUrbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUrbeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUrbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
