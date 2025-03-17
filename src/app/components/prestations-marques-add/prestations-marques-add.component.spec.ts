import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsMarquesAddComponent } from './prestations-marques-add.component';

describe('PrestationsMarquesAddComponent', () => {
  let component: PrestationsMarquesAddComponent;
  let fixture: ComponentFixture<PrestationsMarquesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestationsMarquesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestationsMarquesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
