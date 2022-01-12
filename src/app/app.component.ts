import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SiteInfoModel } from './modale/siteInfo';
import { AllApisService } from './services/All/all-apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'majalcom';
  dataInfo :SiteInfoModel;
  loading = false
  constructor(public router :Router , private api : AllApisService){}
  ngOnInit(): void {
    this.getInfo();
    
  }
  getInfo(){
    this.loading = true
    this.api.getSiteInfo().subscribe(res=>{
      this.dataInfo = res.data;
      this.loading = false
      
    })
  }
}
