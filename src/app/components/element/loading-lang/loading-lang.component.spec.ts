import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingLangComponent } from './loading-lang.component';

describe('LoadingLangComponent', () => {
  let component: LoadingLangComponent;
  let fixture: ComponentFixture<LoadingLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
