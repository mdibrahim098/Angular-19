import { Component, Input, EventEmitter } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './app.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})

export class AppComponent {

       @Input()
         courses = COURSES;

        constructor() {
        }
        courseEmitter = new EventEmitter<Course>();

        ngOnInit() {
        }
       onCourseSelected(course: Course) {
        console.log('Card clicked!',course);
       }


}

