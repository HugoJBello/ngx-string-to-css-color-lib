import { TestBed } from '@angular/core/testing';

import { NgxStringToCssColorService } from './ngx-string-to-css-color.service';

describe('NgxStringToCssColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxStringToCssColorService = TestBed.get(NgxStringToCssColorService);
    expect(service).toBeTruthy();
  });
});
