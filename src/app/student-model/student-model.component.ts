import { Component } from '@angular/core';
export interface Student {
  rollNo: number;
  name: string;
  age: number;
  email: string;
  date: string;
  isMale: boolean;
}
@Component({
  selector: 'app-student-model',
  templateUrl: './student-model.component.html',
  styleUrls: ['./student-model.component.css']
})
export class StudentModelComponent {

}
