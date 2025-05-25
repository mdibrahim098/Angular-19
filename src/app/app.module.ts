import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from "./course-card/course-card.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CourseCardComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface Course {
  id: number;
  description: string;
  title: string;
  iconUrl: string;
  category: string;
  lessonsCount: number;
  longDescription?: string;
  promo?: boolean;
  url?: string;
  courseListIcon?: string;
  courseListImage?: string;           

}
