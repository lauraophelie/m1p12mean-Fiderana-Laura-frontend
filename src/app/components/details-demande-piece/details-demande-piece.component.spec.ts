import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDemandePieceComponent } from './details-demande-piece.component';

describe('DetailsDemandePieceComponent', () => {
  let component: DetailsDemandePieceComponent;
  let fixture: ComponentFixture<DetailsDemandePieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsDemandePieceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsDemandePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
