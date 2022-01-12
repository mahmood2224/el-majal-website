import { Component, Input, OnInit } from '@angular/core';
import { Fqa } from 'src/app/modale/home';

@Component({
  selector: 'app-asked-home',
  templateUrl: './asked-home.component.html',
  styleUrls: ['./asked-home.component.scss']
})
export class AskedHomeComponent implements OnInit {

  @Input() Fqa: Fqa[];
  constructor() { }

  ngOnInit(): void {
  }

}
