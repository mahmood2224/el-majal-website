import { Component, OnInit } from '@angular/core';
import { HomeModel, Setting } from 'src/app/modale/home';
import { AllApisService } from 'src/app/services/All/all-apis.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  loadingPage = false;
  footer : Setting
  constructor(private api : AllApisService) { }

  ngOnInit(): void {
    this.getFooter()
  }
  getFooter(){
    this.api.getHome().subscribe(res=>{
      this.footer = res.data.setting
    })
  }
}
