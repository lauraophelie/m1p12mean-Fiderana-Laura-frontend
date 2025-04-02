import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPertePieceComponent } from './details-perte-piece.component';

describe('DetailsPertePieceComponent', () => {
  let component: DetailsPertePieceComponent;
  let fixture: ComponentFixture<DetailsPertePieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsPertePieceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsPertePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
