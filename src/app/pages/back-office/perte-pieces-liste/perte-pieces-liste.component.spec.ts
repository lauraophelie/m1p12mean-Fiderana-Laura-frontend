import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertePiecesListeComponent } from './perte-pieces-liste.component';

describe('PertePiecesListeComponent', () => {
  let component: PertePiecesListeComponent;
  let fixture: ComponentFixture<PertePiecesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PertePiecesListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PertePiecesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
