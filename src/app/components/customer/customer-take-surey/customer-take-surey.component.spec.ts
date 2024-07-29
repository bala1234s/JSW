import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTakeSureyComponent } from './customer-take-surey.component';

describe('CustomerTakeSureyComponent', () => {
  let component: CustomerTakeSureyComponent;
  let fixture: ComponentFixture<CustomerTakeSureyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerTakeSureyComponent]
    });
    fixture = TestBed.createComponent(CustomerTakeSureyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
