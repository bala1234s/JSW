import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActionPlanComponent } from './admin-action-plan.component';

describe('AdminActionPlanComponent', () => {
  let component: AdminActionPlanComponent;
  let fixture: ComponentFixture<AdminActionPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminActionPlanComponent]
    });
    fixture = TestBed.createComponent(AdminActionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
