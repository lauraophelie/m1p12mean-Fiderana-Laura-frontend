import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksMecanicienComponent } from './stocks-mecanicien.component';

describe('StocksMecanicienComponent', () => {
  let component: StocksMecanicienComponent;
  let fixture: ComponentFixture<StocksMecanicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksMecanicienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StocksMecanicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
