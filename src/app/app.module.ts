import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AssessmentProcessComponent } from './assessment-process/assessment-process.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AttendenceTrackComponent } from './attendence-track/attendence-track.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AssessmentProcessComponent,
    AttendenceTrackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
