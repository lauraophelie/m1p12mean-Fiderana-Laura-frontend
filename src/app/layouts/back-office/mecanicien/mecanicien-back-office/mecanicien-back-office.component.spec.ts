import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicienBackOfficeComponent } from './mecanicien-back-office.component';

describe('MecanicienBackOfficeComponent', () => {
  let component: MecanicienBackOfficeComponent;
  let fixture: ComponentFixture<MecanicienBackOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MecanicienBackOfficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MecanicienBackOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
