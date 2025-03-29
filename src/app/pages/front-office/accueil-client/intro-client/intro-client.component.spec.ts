import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroClientComponent } from './intro-client.component';

describe('IntroClientComponent', () => {
  let component: IntroClientComponent;
  let fixture: ComponentFixture<IntroClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
