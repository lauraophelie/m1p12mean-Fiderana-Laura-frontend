import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesGarageComponent } from './services-garage.component';

describe('ServicesGarageComponent', () => {
  let component: ServicesGarageComponent;
  let fixture: ComponentFixture<ServicesGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesGarageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
