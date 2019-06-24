import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaActividadComponent } from './nueva-actividad.component';

describe('NuevaActividadComponent', () => {
  let component: NuevaActividadComponent;
  let fixture: ComponentFixture<NuevaActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
