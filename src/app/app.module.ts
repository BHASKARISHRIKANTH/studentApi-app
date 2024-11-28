import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import ShowStudentsComponent from './show-students/show-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentModelComponent } from './student-model/student-model.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ShowStudentsComponent,
    UpdateStudentComponent,
    StudentModelComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
