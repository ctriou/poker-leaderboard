import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLeaderboardComponent } from './player-leaderboard.component';
import { WinningsDisplayPipe } from '../../pipes/winnings-display.pipe';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { HttpClientInMemoryWebApiModule } from '../../../../node_modules/angular-in-memory-web-api';
import { InMemoryDataService } from '../../services/database/in-memory-data.service';
import { NgbModule } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';

describe('PlayerLeaderboardComponent', () => {
  let component: PlayerLeaderboardComponent;
  let fixture: ComponentFixture<PlayerLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PlayerLeaderboardComponent,
        WinningsDisplayPipe
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
        ),
    
        NgbModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title in a h5 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('ALL-TIME TOURNAMENT EARNINGS');
  }));
});
