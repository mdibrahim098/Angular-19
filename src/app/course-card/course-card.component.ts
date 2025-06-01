import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Course } from '../app.module';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})


export class CourseCardComponent implements OnInit {

  @Input()
  course!: Course;

  @Input({ required: true })
  cardIndex!: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  ngOnInit(): void { }

  onCourseViewed(): void {
    console.log("Hello");
    this.courseSelected.emit(this.course);
  }
}
