import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = 'https://gsmktg.azurewebsites.net/api/v1/techlabs/test/students';

  constructor(private http:HttpClient) { }

  getStudents() {
    return this.http.get(this.url);
  }
  addStudent(newStudentData:any) {
    return this.http.post(this.url, newStudentData);
  }
  deleteStudent(id:any) {
    return this.http.delete(this.url + "/" + id);
  }
  getStudent(id:any)
  {
    const student = this.http.get(this.url + "/" + id);
    return student;
  }
  updateStudent(id:any, updatedStudentData:any) {
    return this.http.put(this.url + "/" + id, updatedStudentData);
  }
}
