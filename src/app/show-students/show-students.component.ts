import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export default class ShowStudentsComponent {
  studentData:any ='';
  updatedStudentData:any='';
  constructor(private studentService:StudentService) {
    this.loadStudents();

  }
  loadStudents() {
    this.studentService.getStudents().subscribe((data:any) => {
      this.studentData = data;
      console.log(this.studentData);
    });
  }
  deleteStudent(id:any) 
  {
    console.log(id);
    this.studentService.deleteStudent(id).subscribe(() => {});
    this.loadStudents();
  };
  updateStudent(id:any){
    console.log(id);
    this.studentService.updateStudent(id,this.updatedStudentData).subscribe(() =>{});
    this.loadStudents();
  };
  
}
  
