import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStringToCssColorLibComponent } from './ngx-string-to-css-color-lib.component';

describe('NgxStringToCssColorLibComponent', () => {
  let component: NgxStringToCssColorLibComponent;
  let fixture: ComponentFixture<NgxStringToCssColorLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStringToCssColorLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStringToCssColorLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
