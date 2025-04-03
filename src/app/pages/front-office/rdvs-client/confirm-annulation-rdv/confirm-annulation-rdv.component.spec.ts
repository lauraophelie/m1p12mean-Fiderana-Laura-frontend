import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAnnulationRdvComponent } from './confirm-annulation-rdv.component';

describe('ConfirmAnnulationRdvComponent', () => {
  let component: ConfirmAnnulationRdvComponent;
  let fixture: ComponentFixture<ConfirmAnnulationRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmAnnulationRdvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmAnnulationRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
