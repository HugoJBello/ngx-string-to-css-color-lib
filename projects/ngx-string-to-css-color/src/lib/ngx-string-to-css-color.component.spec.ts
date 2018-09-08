import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStringToCssColorComponent } from './ngx-string-to-css-color.component';

describe('NgxStringToCssColorComponent', () => {
  let component: NgxStringToCssColorComponent;
  let fixture: ComponentFixture<NgxStringToCssColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStringToCssColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStringToCssColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
