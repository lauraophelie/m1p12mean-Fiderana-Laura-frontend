import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesListeComponent } from './employes-liste.component';

describe('EmployesListeComponent', () => {
  let component: EmployesListeComponent;
  let fixture: ComponentFixture<EmployesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployesListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
