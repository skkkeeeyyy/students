import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsCollegeComponent } from './students-college/students-college.component';
import { DepartmentnameCollegeComponent } from './departmentname-college/departmentname-college.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsCollegeComponent,
    DepartmentnameCollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
