import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesAjoutComponent } from './pieces-ajout.component';

describe('PiecesAjoutComponent', () => {
  let component: PiecesAjoutComponent;
  let fixture: ComponentFixture<PiecesAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiecesAjoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiecesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
