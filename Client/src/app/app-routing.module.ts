import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EducationComponent} from "./components/education/education.component";
import {AssignmentComponent} from "./components/assignment/assignment.component";
import {HomeComponent} from "./components/home/home.component";
import {exerciseResolver} from "./resolvers/exercise-resolver";
import {myAssignmentsResolver} from "./resolvers/my-assignments.resolver";
import {mySubjectsResolver} from "./resolvers/my-subjects.resolver";
import {WelcomeComponent} from "./components/welcome/welcome.component";

const routes: Routes = [
  {
    path: "trainer",
    component: HomeComponent,
    children: [
      {
        path: "education/exercises/:exerciseId",
        component: AssignmentComponent,
        resolve: {exercise: exerciseResolver}
      },
      {
        path: "education",
        component: EducationComponent,
        resolve: {assignments: myAssignmentsResolver, subjects: mySubjectsResolver}
      },
    ]
  },
  {
    path: "",
    component: WelcomeComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
