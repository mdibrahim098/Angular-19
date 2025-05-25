import { Component, Input } from '@angular/core';
import { Course } from '../app.module';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  
    @Input({
      required: true
    }) 

    course: Course;

    constructor() {

     }
     
      ngOnInit() {

      }



}
