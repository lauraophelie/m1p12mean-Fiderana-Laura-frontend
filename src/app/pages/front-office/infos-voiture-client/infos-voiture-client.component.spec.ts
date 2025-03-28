import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosVoitureClientComponent } from './infos-voiture-client.component';

describe('InfosVoitureClientComponent', () => {
  let component: InfosVoitureClientComponent;
  let fixture: ComponentFixture<InfosVoitureClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfosVoitureClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfosVoitureClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
