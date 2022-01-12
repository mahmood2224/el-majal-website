import { Component, Input, OnInit } from '@angular/core';
import { Setting } from 'src/app/modale/home';

@Component({
  selector: 'app-provide-home',
  templateUrl: './provide-home.component.html',
  styleUrls: ['./provide-home.component.scss']
})
export class ProvideHomeComponent implements OnInit {

  @Input() setting: Setting;
  constructor() { }

  ngOnInit(): void {
  }

}
