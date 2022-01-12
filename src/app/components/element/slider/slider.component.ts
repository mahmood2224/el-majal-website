import { Component, Input, OnInit } from '@angular/core';
import { Slider } from 'src/app/modale/home';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() slider: Slider[];
  constructor() { }

  ngOnInit(): void {
  }

}
