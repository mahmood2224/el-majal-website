import { Component, OnInit } from '@angular/core';
import { SiteInfoModel } from 'src/app/modale/siteInfo';
import { AllApisService } from 'src/app/services/All/all-apis.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  siteInfo : SiteInfoModel;
  loadingPage = false
  constructor(private api : AllApisService) { }

  ngOnInit(): void {
    this.getSite()
  }
  getSite(){
    this.loadingPage = true;
    this.api.getSiteInfo().subscribe(res =>{
      this.siteInfo = res.data;
      this.loadingPage =false
    })
  }

}
