import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEntrenamientoComponent } from './registro-entrenamiento.component';

describe('ResitroEntrenamientoComponent', () => {
  let component: RegistroEntrenamientoComponent;
  let fixture: ComponentFixture<RegistroEntrenamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEntrenamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEntrenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
