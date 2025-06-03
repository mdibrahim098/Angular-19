import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './app.module';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})

export class AppComponent implements AfterViewInit {

       @Input()
         courses = COURSES;

        

         @ViewChild('cardRef1',{read: ElementRef})
         card1 :ElementRef
 
         @ViewChild('container')
         containerDiv :ElementRef


        constructor(){
          console.log('containerDiv', this.card1);
        }


        ngAfterViewInit(){
            console.log('containerDiv', this.card1);
        }

 
       onCourseSelected(course: Course) {
         console.log('containerDiv', this.card1);
       }


}

