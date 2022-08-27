import { Component, OnInit, Input } from '@angular/core';
import{ GlobalVariables } from '../global/variables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  language = GlobalVariables.language;
  translation = GlobalVariables.translation["home"];
  pdf = GlobalVariables.translation["assets"]["cv"]
constructor() { }

  ngOnInit(): void {
  }

}