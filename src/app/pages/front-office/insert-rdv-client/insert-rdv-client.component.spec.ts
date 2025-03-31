import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRdvClientComponent } from './insert-rdv-client.component';

describe('InsertRdvClientComponent', () => {
  let component: InsertRdvClientComponent;
  let fixture: ComponentFixture<InsertRdvClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertRdvClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertRdvClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
