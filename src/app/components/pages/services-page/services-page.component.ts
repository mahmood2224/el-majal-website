import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesModel } from 'src/app/modale/services';
import { AllApisService } from 'src/app/services/All/all-apis.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  page = 1;
  showPagenate = true;
  Arr = Array; 
  num:number =0 ;
  currentPage : number = 0 ;
  emptyPage = false;
  loadingPage = false;
  services : ServicesModel[];
  lengthAll
  constructor(private api : AllApisService , public router : Router) { }

  ngOnInit(): void {
    this.getServices()
  }
  getServices(){
    this.showPagenate = true;
    this.emptyPage = false;
    this.loadingPage = true;
    this.api.getAllServices(this.page).subscribe(response =>{
      if(response.status == 1){
        this.num = response.data.pagination.total_pages;
        if(this.num < 2){
          this.showPagenate =false; 
        }
        this.loadingPage = false;
        this.num = response.data.pagination.total_pages;
        this.currentPage = response.data.pagination.current_page ;
        this.lengthAll = response.data.data.length;
      }
      this.services = response.data.data;
      if(response.status == 1){
        this.loadingPage = false;
      }
      if(response.data.data.length === 0){
        this.emptyPage = true;
      }
    })
  }
  singleUsers(id){
    this.router.navigate(["/service-detailes", { 'services_id': id }]);
  }
  moveTo(index){
    if(index <= 0 || index > this.num)return;
    this.page = index;
    this.getServices();
  }

}
