import { Component, OnInit, ViewChild, ElementRef, Input  } from '@angular/core';
import{ GlobalVariables } from '../global/variables';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() language:string;
  translation = GlobalVariables.translation["navbar"];
  @ViewChild("navList") list: ElementRef;
  @ViewChild("navCheckbox") checkbox: ElementRef;
  isChecked = false;
  ngAfterViewInit() {
    var items = this.list.nativeElement.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
      items[i].addEventListener('click', this.closeMenu);
    }
  }
  closeMenu =()=>{
    this.isChecked = false;
  }
  

}
