import {Component, OnInit} from '@angular/core';
import {EducationService} from "../../services/education.service";
import {Exercise} from "../../models/exercise";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {
  exercise!: Exercise;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly educationService: EducationService,
  ) {
  }

  ngOnInit(): void {
    this.exercise = this.activatedRoute.snapshot.data["exercise"];
  }

  sendSolution(solution: string) {
    this.educationService.finishExercise(1, this.exercise.id, solution).subscribe();
  }
}
