import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorFormComponentComponent } from './selector-form-component.component';

describe('SelectorFormComponentComponent', () => {
  let component: SelectorFormComponentComponent;
  let fixture: ComponentFixture<SelectorFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
