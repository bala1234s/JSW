import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSurveyStatusComponent } from './admin-survey-status.component';

describe('AdminSurveyStatusComponent', () => {
  let component: AdminSurveyStatusComponent;
  let fixture: ComponentFixture<AdminSurveyStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSurveyStatusComponent]
    });
    fixture = TestBed.createComponent(AdminSurveyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
