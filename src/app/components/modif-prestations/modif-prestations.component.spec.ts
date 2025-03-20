import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPrestationsComponent } from './modif-prestations.component';

describe('ModifPrestationsComponent', () => {
  let component: ModifPrestationsComponent;
  let fixture: ComponentFixture<ModifPrestationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifPrestationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifPrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
