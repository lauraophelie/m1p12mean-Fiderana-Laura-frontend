import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarquesDetailsComponent } from './marques-details.component';

describe('MarquesDetailsComponent', () => {
  let component: MarquesDetailsComponent;
  let fixture: ComponentFixture<MarquesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarquesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarquesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
