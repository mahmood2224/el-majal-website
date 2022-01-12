import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsPagesComponent } from './faqs-pages.component';

describe('FaqsPagesComponent', () => {
  let component: FaqsPagesComponent;
  let fixture: ComponentFixture<FaqsPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
