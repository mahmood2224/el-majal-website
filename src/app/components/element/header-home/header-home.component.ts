import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxNotificationDirection, NgxNotificationMsgService, NgxNotificationStatusMsg } from 'ngx-notification-msg';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {

  @ViewChild("isShow" , {static: false}) lab:ElementRef;
  titleLang;
  langCondition;
  flag = false
  constructor(public router: Router,private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document,private readonly ngxNotificationMsgService: NgxNotificationMsgService ){

    let lang = localStorage.getItem("lang");
    if(lang === "ar"){
      this.langCondition = true
    }
    else{
      this.langCondition = false
    }
    if(lang !== null)  
    {
      this.changeLangage(lang);
    }
    
    else{
      this.changeLangage("en"); 
    }
    
   }
  ngOnInit(): void {
  }

  onClickedOut(e: Event) {
    this.lab.nativeElement.classList.remove("show");
  }
  clickinside(){
    this.lab.nativeElement.classList.add("show");
  }
  changeLangage(lang: string) {
    
    localStorage.setItem("lang" , lang); 
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    if(lang === "ar"){
      this.titleLang = "العربية";
      this.flag = true;

    }
    else{
      this.titleLang = "English"
      this.flag = false;
    }
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.changeCssFile(lang);
    
  }
  changeCssFile(lang: string) {
    
  if(lang === "ar"){
    this.langCondition = true
  }
  else{ 
    this.langCondition = false
  }

  let headTag = this.document.getElementsByTagName(
    "head"
  )[0] as HTMLHeadElement;
  let existingLink = this.document.getElementById(
    "langCss"
  ) as HTMLLinkElement;
  
  let bundleName ="englishStyle.css";
  if(lang === "ar"){
    bundleName = "arabicStyle.css";
    this.titleLang = "العربية"
    this.flag = true;
  }
  else {
    bundleName = "englishStyle.css";
    this.titleLang = "English";
    this.flag = false;
  }

  if (existingLink) {
    existingLink.href = bundleName;
  } else {
    let newLink = this.document.createElement("link");
    newLink.type = "text/css";
    newLink.rel = "stylesheet";
    newLink.type = "text/css";
    newLink.id = "langCss";
    newLink.href = bundleName;
    headTag.appendChild(newLink);
  }
  }

  langButton(lang){
    this.router.navigate(['/loadinLanguage']);
    this.changeLangage(lang)

  }

}
