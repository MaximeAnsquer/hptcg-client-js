import { TestBed, inject } from '@angular/core/testing';

import { CardFactoryService } from './card-factory.service';

describe('CardFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardFactoryService]
    });
  });

  it('should ...', inject([CardFactoryService], (service: CardFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
