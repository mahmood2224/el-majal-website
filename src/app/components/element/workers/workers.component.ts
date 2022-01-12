import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Client } from 'src/app/modale/home';
import * as Carousel from '../../../../assets/js/carousel'

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  @Input() cats: Client[];
  constructor() { }
  slideConfigWorcks = {
    speed:300,
    slidesToShow:4,
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
    Carousel.multiCarousel()
  }
  next() {
    this.slickModal.slickNext();
  }
  
  prev() {
    this.slickModal.slickPrev();
  }
}
