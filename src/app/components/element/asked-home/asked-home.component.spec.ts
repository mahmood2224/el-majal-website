import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskedHomeComponent } from './asked-home.component';

describe('AskedHomeComponent', () => {
  let component: AskedHomeComponent;
  let fixture: ComponentFixture<AskedHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskedHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
