import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestQuationComponent } from './request-quation.component';

describe('RequestQuationComponent', () => {
  let component: RequestQuationComponent;
  let fixture: ComponentFixture<RequestQuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestQuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestQuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
