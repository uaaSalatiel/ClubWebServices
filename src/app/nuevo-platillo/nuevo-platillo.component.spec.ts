import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPlatilloComponent } from './nuevo-platillo.component';

describe('NuevoPlatilloComponent', () => {
  let component: NuevoPlatilloComponent;
  let fixture: ComponentFixture<NuevoPlatilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPlatilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
