import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponsePerteDialogComponent } from './reponse-perte-dialog.component';

describe('ReponsePerteDialogComponent', () => {
  let component: ReponsePerteDialogComponent;
  let fixture: ComponentFixture<ReponsePerteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReponsePerteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReponsePerteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
