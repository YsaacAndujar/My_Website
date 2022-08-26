import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import{ GlobalVariables } from '../global/variables';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  language = GlobalVariables.language;
  translation = GlobalVariables.translation["projects"];
  constructor() { }

  ngOnInit(): void {
  }

}
