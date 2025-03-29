import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRdvClientComponent } from './add-rdv-client.component';

describe('AddRdvClientComponent', () => {
  let component: AddRdvClientComponent;
  let fixture: ComponentFixture<AddRdvClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRdvClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRdvClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
