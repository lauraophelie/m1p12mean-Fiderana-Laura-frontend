import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsAddMarquesComponent } from './prestations-add-marques.component';

describe('PrestationsAddMarquesComponent', () => {
  let component: PrestationsAddMarquesComponent;
  let fixture: ComponentFixture<PrestationsAddMarquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestationsAddMarquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestationsAddMarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
