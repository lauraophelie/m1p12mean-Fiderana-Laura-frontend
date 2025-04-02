import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPertePiecesComponent } from './insert-perte-pieces.component';

describe('InsertPertePiecesComponent', () => {
  let component: InsertPertePiecesComponent;
  let fixture: ComponentFixture<InsertPertePiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertPertePiecesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertPertePiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
