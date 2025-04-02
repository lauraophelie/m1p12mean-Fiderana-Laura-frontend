import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProfilsComponentComponent } from './liste-profils-component.component';

describe('ListeProfilsComponentComponent', () => {
  let component: ListeProfilsComponentComponent;
  let fixture: ComponentFixture<ListeProfilsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeProfilsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeProfilsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
