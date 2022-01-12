import { Component, OnInit } from '@angular/core';
import { FAQsModel } from 'src/app/modale/FAQs';
import { AllApisService } from 'src/app/services/All/all-apis.service';

@Component({
  selector: 'app-faqs-pages',
  templateUrl: './faqs-pages.component.html',
  styleUrls: ['./faqs-pages.component.scss']
})
export class FaqsPagesComponent implements OnInit {

  FAQs : FAQsModel[];
  loadingPage = false;
  constructor(private apis :AllApisService) { }

  ngOnInit(): void {
    this.getFAQs();
  }
  getFAQs(){
    this.loadingPage = true;
    this.apis.getFAQs().subscribe(res =>{
      this.FAQs = res.data;
      this.loadingPage = false;
    })
  }

}
