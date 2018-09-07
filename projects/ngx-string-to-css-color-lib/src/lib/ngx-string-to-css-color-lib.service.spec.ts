import { TestBed } from '@angular/core/testing';

import { NgxStringToCssColorLibService } from './ngx-string-to-css-color-lib.service';

describe('NgxStringToCssColorLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxStringToCssColorLibService = TestBed.get(NgxStringToCssColorLibService);
    expect(service).toBeTruthy();
  });
});
