import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksPiecesMecanicienComponent } from './stocks-pieces-mecanicien.component';

describe('StocksPiecesMecanicienComponent', () => {
  let component: StocksPiecesMecanicienComponent;
  let fixture: ComponentFixture<StocksPiecesMecanicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksPiecesMecanicienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StocksPiecesMecanicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
