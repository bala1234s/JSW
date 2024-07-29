import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCustomerResponseComponent } from './supplier-customer-response.component';

describe('SupplierCustomerResponseComponent', () => {
  let component: SupplierCustomerResponseComponent;
  let fixture: ComponentFixture<SupplierCustomerResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierCustomerResponseComponent]
    });
    fixture = TestBed.createComponent(SupplierCustomerResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
