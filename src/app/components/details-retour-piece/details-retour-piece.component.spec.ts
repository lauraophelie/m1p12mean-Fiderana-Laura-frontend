import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRetourPieceComponent } from './details-retour-piece.component';

describe('DetailsRetourPieceComponent', () => {
  let component: DetailsRetourPieceComponent;
  let fixture: ComponentFixture<DetailsRetourPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsRetourPieceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsRetourPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
