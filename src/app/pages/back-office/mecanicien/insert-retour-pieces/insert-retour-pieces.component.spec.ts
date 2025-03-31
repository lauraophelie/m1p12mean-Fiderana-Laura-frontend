import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRetourPiecesComponent } from './insert-retour-pieces.component';

describe('InsertRetourPiecesComponent', () => {
  let component: InsertRetourPiecesComponent;
  let fixture: ComponentFixture<InsertRetourPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertRetourPiecesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertRetourPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
