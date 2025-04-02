import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPosteComponent } from './form-poste.component';

describe('FormPosteComponent', () => {
  let component: FormPosteComponent;
  let fixture: ComponentFixture<FormPosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPosteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
