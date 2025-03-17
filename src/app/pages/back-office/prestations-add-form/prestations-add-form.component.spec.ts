import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsAddFormComponent } from './prestations-add-form.component';

describe('PrestationsAddFormComponent', () => {
  let component: PrestationsAddFormComponent;
  let fixture: ComponentFixture<PrestationsAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestationsAddFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestationsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
