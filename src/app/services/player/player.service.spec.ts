import { TestBed, inject } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { HttpClientInMemoryWebApiModule } from '../../../../node_modules/angular-in-memory-web-api';
import { InMemoryDataService } from '../database/in-memory-data.service';

describe('PlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService],
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
        )
      ]
    });
  });

  it('should be created', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
  }));
});
