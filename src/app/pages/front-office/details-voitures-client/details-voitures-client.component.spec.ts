import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVoituresClientComponent } from './details-voitures-client.component';

describe('DetailsVoituresClientComponent', () => {
  let component: DetailsVoituresClientComponent;
  let fixture: ComponentFixture<DetailsVoituresClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsVoituresClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsVoituresClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
