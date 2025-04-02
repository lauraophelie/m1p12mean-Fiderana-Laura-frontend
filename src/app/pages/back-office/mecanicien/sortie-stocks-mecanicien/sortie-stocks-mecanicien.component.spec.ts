import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortieStocksMecanicienComponent } from './sortie-stocks-mecanicien.component';

describe('SortieStocksMecanicienComponent', () => {
  let component: SortieStocksMecanicienComponent;
  let fixture: ComponentFixture<SortieStocksMecanicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortieStocksMecanicienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortieStocksMecanicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
