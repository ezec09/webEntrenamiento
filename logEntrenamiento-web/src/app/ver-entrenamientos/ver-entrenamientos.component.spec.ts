import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEntrenamientosComponent } from './ver-entrenamientos.component';

describe('VerEntrenamientosComponent', () => {
  let component: VerEntrenamientosComponent;
  let fixture: ComponentFixture<VerEntrenamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEntrenamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEntrenamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
