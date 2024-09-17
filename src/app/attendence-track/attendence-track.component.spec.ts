import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceTrackComponent } from './attendence-track.component';

describe('AttendenceTrackComponent', () => {
  let component: AttendenceTrackComponent;
  let fixture: ComponentFixture<AttendenceTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendenceTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendenceTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
