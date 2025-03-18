import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsAddComponent } from './prestations-add.component';

describe('PrestationsAddComponent', () => {
  let component: PrestationsAddComponent;
  let fixture: ComponentFixture<PrestationsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestationsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
