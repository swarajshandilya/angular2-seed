import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
@Component({
    selector:'courses',
    template:`
            <h2>Courses</h2>
              {{title}}
              <input type="text" autogrow/>
              <ul>
              <li *ngFor="#course of courses">
              {{course}}
              </li>
              </ul>`,
    providers : [CourseService],
    directives : [AutoGrowDirective]

})
export class CoursesComponent {
    title = "The title of course page";
    courses = (new CourseService()).getCourses();
}