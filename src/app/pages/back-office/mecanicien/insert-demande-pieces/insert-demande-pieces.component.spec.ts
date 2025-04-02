import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDemandePiecesComponent } from './insert-demande-pieces.component';

describe('InsertDemandePiecesComponent', () => {
  let component: InsertDemandePiecesComponent;
  let fixture: ComponentFixture<InsertDemandePiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertDemandePiecesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertDemandePiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
