import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvsClientComponent } from './rdvs-client.component';

describe('RdvsClientComponent', () => {
  let component: RdvsClientComponent;
  let fixture: ComponentFixture<RdvsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdvsClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RdvsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
