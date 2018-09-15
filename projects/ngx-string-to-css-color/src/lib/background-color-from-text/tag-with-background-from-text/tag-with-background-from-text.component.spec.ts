import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagWithBackgroundFromTextComponent } from './tag-with-background-from-text.component';

describe('TagWithBackgroundFromTextComponent', () => {
  let component: TagWithBackgroundFromTextComponent;
  let fixture: ComponentFixture<TagWithBackgroundFromTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagWithBackgroundFromTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagWithBackgroundFromTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
