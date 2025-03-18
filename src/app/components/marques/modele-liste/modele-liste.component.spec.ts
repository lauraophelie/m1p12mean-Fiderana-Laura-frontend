import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleListeComponent } from './modele-liste.component';

describe('ModeleListeComponent', () => {
  let component: ModeleListeComponent;
  let fixture: ComponentFixture<ModeleListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeleListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeleListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
