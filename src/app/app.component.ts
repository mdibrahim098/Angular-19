import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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

        

         @ViewChild('container')
         containerDiv :ElementRef
 
       onCourseSelected(course: Course) {
        console.log('Card clicked!', this.containerDiv);
       }


}

