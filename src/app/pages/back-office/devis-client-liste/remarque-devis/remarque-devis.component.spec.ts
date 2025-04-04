import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarqueDevisComponent } from './remarque-devis.component';

describe('RemarqueDevisComponent', () => {
  let component: RemarqueDevisComponent;
  let fixture: ComponentFixture<RemarqueDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemarqueDevisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemarqueDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
