import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentProcessComponent } from './assessment-process.component';

describe('AssessmentProcessComponent', () => {
  let component: AssessmentProcessComponent;
  let fixture: ComponentFixture<AssessmentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
