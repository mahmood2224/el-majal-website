import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleServicesModel } from 'src/app/modale/singleServices';
import { AllApisService } from 'src/app/services/All/all-apis.service';

@Component({
  selector: 'app-services-detailes',
  templateUrl: './services-detailes.component.html',
  styleUrls: ['./services-detailes.component.scss']
})
export class ServicesDetailesComponent implements OnInit {

  ServicesId;
  singleServices : SingleServicesModel;
  loadingPage = false
  constructor(private router :Router , private route :ActivatedRoute , private api : AllApisService) {
    route.params.subscribe(params => {
      this.ServicesId = params['services_id'];
      this.getUserDetailes();  
    });
   }

  ngOnInit(): void {
    this.getUserDetailes()
  }
  getUserDetailes(){
    this.loadingPage = true;
    this.api.getSingleServices(this.ServicesId).subscribe(res=>{
      this.singleServices = res.data;
      this.loadingPage = false;
    })

  }

}
