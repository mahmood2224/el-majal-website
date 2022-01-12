import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/modale/home';
import * as Carousel from '../../../../assets/js/carousel'
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  @Input() Client: Client[];
  constructor() { }
  slideConfigClient = {
    speed:300,
    slidesToShow:5,
    slidesToScroll:1,
    // cssEase:'linear',
    centerMode:true,
    draggable:true,
    focusOnSelect:true,
    autoplay: true,
    autoplaySpeed: 1500,
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
    Carousel.multiCarousel()
  }
  next() {
    this.slickModal.slickNext();
  }
  
  prev() {
    this.slickModal.slickPrev();
  }

}
