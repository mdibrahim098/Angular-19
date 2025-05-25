import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../app.module';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  
    @Input()
    course: Course;
    
    @Output()
    courseSelected = new EventEmitter<Course>();

    constructor() {
     }
     
      ngOnInit() {
      }

      onCourseViewed() {
        console.log("Hello");
        this.courseSelected.emit(this.course);
      }



}
