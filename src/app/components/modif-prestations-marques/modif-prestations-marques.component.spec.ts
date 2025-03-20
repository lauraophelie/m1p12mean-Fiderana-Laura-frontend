import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPrestationsMarquesComponent } from './modif-prestations-marques.component';

describe('ModifPrestationsMarquesComponent', () => {
  let component: ModifPrestationsMarquesComponent;
  let fixture: ComponentFixture<ModifPrestationsMarquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifPrestationsMarquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifPrestationsMarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
