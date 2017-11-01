import { TestBed, inject } from '@angular/core/testing';

import { MyModelService } from './my-model.service';

describe('MyModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyModelService]
    });
  });

  it('should be created', inject([MyModelService], (service: MyModelService) => {
    expect(service).toBeTruthy();
  }));
});
