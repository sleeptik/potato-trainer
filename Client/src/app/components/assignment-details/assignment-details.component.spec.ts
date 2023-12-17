import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AssignmentDetailsComponent} from './assignment-details.component';

describe('ExerciseDetails', () => {
  let component: AssignmentDetailsComponent;
  let fixture: ComponentFixture<AssignmentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentDetailsComponent]
    });
    fixture = TestBed.createComponent(AssignmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
