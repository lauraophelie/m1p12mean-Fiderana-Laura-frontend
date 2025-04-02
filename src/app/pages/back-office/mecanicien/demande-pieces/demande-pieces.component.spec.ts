import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePiecesComponent } from './demande-pieces.component';

describe('DemandePiecesComponent', () => {
  let component: DemandePiecesComponent;
  let fixture: ComponentFixture<DemandePiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandePiecesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandePiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
