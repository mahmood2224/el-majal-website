import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideHomeComponent } from './provide-home.component';

describe('ProvideHomeComponent', () => {
  let component: ProvideHomeComponent;
  let fixture: ComponentFixture<ProvideHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
