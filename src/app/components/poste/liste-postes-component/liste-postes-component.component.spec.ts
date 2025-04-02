import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePostesComponentComponent } from './liste-postes-component.component';

describe('ListePostesComponentComponent', () => {
  let component: ListePostesComponentComponent;
  let fixture: ComponentFixture<ListePostesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePostesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListePostesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
