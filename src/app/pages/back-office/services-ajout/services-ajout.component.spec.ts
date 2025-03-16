import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAjoutComponent } from './services-ajout.component';

describe('ServicesAjoutComponent', () => {
  let component: ServicesAjoutComponent;
  let fixture: ComponentFixture<ServicesAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesAjoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
