import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Service } from 'src/app/modale/home';
import * as Carousel from '../../../../assets/js/carousel'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input() Service: Service[];
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  constructor(public router : Router) { }

  slideConfig = {
    speed:300,
    slidesToShow:3,
    slidesToScroll:1,
    // cssEase:'linear',
    centerMode:true,
    draggable:true,
    focusOnSelect:true,
    responsive: [
      {
      breakpoint: 1024,
      settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      }
      },
      {
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
      },
      {
      breakpoint: 360,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
      ]
  };
  ngOnInit(): void {
    // Carousel.multiCarousel()
  }
  singleUsers(id){
    this.router.navigate(["/service-detailes", { 'services_id': id }]);
  }
  next() {
    this.slickModal.slickNext();
  }
  
  prev() {
    this.slickModal.slickPrev();
  }
}
