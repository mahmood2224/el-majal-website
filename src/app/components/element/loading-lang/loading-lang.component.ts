import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-lang',
  templateUrl: './loading-lang.component.html',
  styleUrls: ['./loading-lang.component.scss']
})
export class LoadingLangComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
    this.router.navigate(["/home"]);

  }

}
