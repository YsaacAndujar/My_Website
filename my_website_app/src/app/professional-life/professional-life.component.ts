import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import{ GlobalVariables } from '../global/variables';

@Component({
  selector: 'app-professional-life',
  templateUrl: './professional-life.component.html',
  styleUrls: ['./professional-life.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfessionalLifeComponent implements OnInit {
  language = GlobalVariables.language;
  translation = GlobalVariables.translation["professionalLife"];
  constructor() { }

  ngOnInit(): void {
  }

}
