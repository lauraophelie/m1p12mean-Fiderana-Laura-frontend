import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfilComponent } from './form-profil.component';

describe('FormProfilComponent', () => {
  let component: FormProfilComponent;
  let fixture: ComponentFixture<FormProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
