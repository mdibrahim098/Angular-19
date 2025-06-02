import { Component, Input, EventEmitter, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './app.module';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})

export class AppComponent {

       @Input()
         courses = COURSES;

        @ViewChild(CourseCardComponent)
         card: CourseCardComponent;



 
       onCourseSelected(course: Course) {
        console.log('Card clicked!',course);
       }


}

