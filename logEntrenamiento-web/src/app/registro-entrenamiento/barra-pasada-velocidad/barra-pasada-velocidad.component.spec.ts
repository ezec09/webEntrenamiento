import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPasadaVelocidadComponent } from './barra-pasada-velocidad.component';

describe('BarraPasadaVelocidadComponent', () => {
  let component: BarraPasadaVelocidadComponent;
  let fixture: ComponentFixture<BarraPasadaVelocidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraPasadaVelocidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraPasadaVelocidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
