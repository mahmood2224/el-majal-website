import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountactPageComponent } from './countact-page.component';

describe('CountactPageComponent', () => {
  let component: CountactPageComponent;
  let fixture: ComponentFixture<CountactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
