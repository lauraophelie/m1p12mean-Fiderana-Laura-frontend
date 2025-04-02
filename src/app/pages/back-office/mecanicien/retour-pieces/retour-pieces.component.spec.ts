import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourPiecesComponent } from './retour-pieces.component';

describe('RetourPiecesComponent', () => {
  let component: RetourPiecesComponent;
  let fixture: ComponentFixture<RetourPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetourPiecesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetourPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
