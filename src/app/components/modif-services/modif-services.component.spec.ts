import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifServicesComponent } from './modif-services.component';

describe('ModifServicesComponent', () => {
  let component: ModifServicesComponent;
  let fixture: ComponentFixture<ModifServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
