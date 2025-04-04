import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisClientListeComponent } from './devis-client-liste.component';

describe('DevisClientListeComponent', () => {
  let component: DevisClientListeComponent;
  let fixture: ComponentFixture<DevisClientListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevisClientListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevisClientListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
