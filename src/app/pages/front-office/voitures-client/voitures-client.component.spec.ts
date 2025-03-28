import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoituresClientComponent } from './voitures-client.component';

describe('VoituresClientComponent', () => {
  let component: VoituresClientComponent;
  let fixture: ComponentFixture<VoituresClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoituresClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoituresClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
