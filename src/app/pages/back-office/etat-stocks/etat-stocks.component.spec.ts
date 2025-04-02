import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatStocksComponent } from './etat-stocks.component';

describe('EtatStocksComponent', () => {
  let component: EtatStocksComponent;
  let fixture: ComponentFixture<EtatStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatStocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
