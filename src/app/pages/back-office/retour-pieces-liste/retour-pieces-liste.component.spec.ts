import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourPiecesListeComponent } from './retour-pieces-liste.component';

describe('RetourPiecesListeComponent', () => {
  let component: RetourPiecesListeComponent;
  let fixture: ComponentFixture<RetourPiecesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetourPiecesListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetourPiecesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
