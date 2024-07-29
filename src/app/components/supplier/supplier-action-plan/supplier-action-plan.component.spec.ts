import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierActionPlanComponent } from './supplier-action-plan.component';

describe('SupplierActionPlanComponent', () => {
  let component: SupplierActionPlanComponent;
  let fixture: ComponentFixture<SupplierActionPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierActionPlanComponent]
    });
    fixture = TestBed.createComponent(SupplierActionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
