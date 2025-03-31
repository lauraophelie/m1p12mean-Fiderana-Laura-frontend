import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePiecesListeComponent } from './demande-pieces-liste.component';

describe('DemandePiecesListeComponent', () => {
  let component: DemandePiecesListeComponent;
  let fixture: ComponentFixture<DemandePiecesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandePiecesListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandePiecesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
