import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import{ GlobalVariables } from '../global/variables';
@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {
  language = GlobalVariables.language;
  translation = GlobalVariables.translation["contactme"];
  linkedin = "ysaac-andujar-binet-982517232";
  mobile = "+1-(849)-281-8385";
  phone = "+1-(809)-593-3180";
  email = "ysaacandujar@gmail.com";
  @ViewChild("linkedinBtn") linkedinBtn: ElementRef;
  @ViewChild("mobileBtn") mobileBtn: ElementRef;
  @ViewChild("phoneBtn") phoneBtn: ElementRef;
  @ViewChild("emailBtn") emailBtn: ElementRef;
  constructor(
    private clipboardApi: ClipboardService
  ) { }

  ngOnInit(): void {
  }
  copyLinkedin(){
    this.copy(this.linkedinBtn.nativeElement,this.linkedin);
  }
  copyMobile(){
    this.copy(this.mobileBtn.nativeElement,this.mobile);
  }
  copyPhone(){
    this.copy(this.phoneBtn.nativeElement,this.phone);
  }
  copyEmail(){
    this.copy(this.emailBtn.nativeElement,this.email);
  }

  copy(btn, text){
    var orig = btn.style.color;
     btn.style.color = '#78FF00';
     setTimeout(function(){
          btn.style.color = orig;
     }, 500);
    this.clipboardApi.copyFromContent(text);
  }

}
