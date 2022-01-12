import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client, Fqa, Slider, Service, HomeModel, Setting } from 'src/app/modale/home';
import { AllApisService } from 'src/app/services/All/all-apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api : AllApisService, private router: Router) { }
  slider: Slider[];
  Client: Client[];
  Fqa: Fqa[];
  Service: Service[];
  cats: Client[];
  setting : Setting;
  homeData : HomeModel;
  loadingPage = false;
  

  ngOnInit(): void {
    this.getHome();
  }
  getHome(){
    this.loadingPage =true;
    this.api.getHome().subscribe(res =>{
      this.homeData = res.data;
      this.slider = res.data.slider;
      this.cats = res.data.cats;
      this.Service = res.data.service
      this.Client = res.data.clients;
      this.Fqa = res.data.fqa;
      this.setting = res.data.setting;
      this.loadingPage = false
    })

  }

}
