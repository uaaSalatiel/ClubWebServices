import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEventoComponent } from './nuevo-evento.component';

describe('NuevoEventoComponent', () => {
  let component: NuevoEventoComponent;
  let fixture: ComponentFixture<NuevoEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
