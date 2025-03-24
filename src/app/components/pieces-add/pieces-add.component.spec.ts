import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesAddComponent } from './pieces-add.component';

describe('PiecesAddComponent', () => {
  let component: PiecesAddComponent;
  let fixture: ComponentFixture<PiecesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiecesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiecesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
