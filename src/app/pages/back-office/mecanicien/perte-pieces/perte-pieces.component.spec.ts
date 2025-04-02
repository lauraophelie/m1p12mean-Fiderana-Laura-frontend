import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertePiecesComponent } from './perte-pieces.component';

describe('PertePiecesComponent', () => {
  let component: PertePiecesComponent;
  let fixture: ComponentFixture<PertePiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PertePiecesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PertePiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
