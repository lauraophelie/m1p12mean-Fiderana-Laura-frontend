import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvsListeComponent } from './rdvs-liste.component';

describe('RdvsListeComponent', () => {
  let component: RdvsListeComponent;
  let fixture: ComponentFixture<RdvsListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdvsListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RdvsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
