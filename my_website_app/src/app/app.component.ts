import { Component, OnInit } from '@angular/core';
import{ GlobalVariables } from './global/variables';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my_website_app';
  language="en"
  ngOnInit(): void {
    try {
      var l = navigator.language.substring(0,2);
      if(l=="es"){
        GlobalVariables.language = l;
        this.language=l
      }
    } catch (error) {
      //
    }
  }
}
