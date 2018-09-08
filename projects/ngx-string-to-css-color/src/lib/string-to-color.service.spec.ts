import { TestBed } from '@angular/core/testing';

import { StringToColorService } from './string-to-color.service';

describe('StringToColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StringToColorService = TestBed.get(StringToColorService);
    expect(service).toBeTruthy();
  });
});
