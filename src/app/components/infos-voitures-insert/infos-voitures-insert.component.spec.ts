import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosVoituresInsertComponent } from './infos-voitures-insert.component';

describe('InfosVoituresInsertComponent', () => {
  let component: InfosVoituresInsertComponent;
  let fixture: ComponentFixture<InfosVoituresInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfosVoituresInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfosVoituresInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
