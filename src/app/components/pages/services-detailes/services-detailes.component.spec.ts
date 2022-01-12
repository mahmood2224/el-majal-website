import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDetailesComponent } from './services-detailes.component';

describe('ServicesDetailesComponent', () => {
  let component: ServicesDetailesComponent;
  let fixture: ComponentFixture<ServicesDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
